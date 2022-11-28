import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Metrics {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * getGamePpa - Team Predicated Points Added (PPA/EPA) by game
   *
   * Predicted Points Added (PPA) by game
  **/
  getGamePpa(
    req: operations.GetGamePpaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGamePpaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGamePpaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ppa/games";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetGamePpaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.gamePpas = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPlayerGamePpa - Player Predicated Points Added (PPA/EPA) broken down by game
   *
   * Predicted Points Added (PPA) by player game
  **/
  getPlayerGamePpa(
    req: operations.GetPlayerGamePpaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPlayerGamePpaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPlayerGamePpaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ppa/players/games";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPlayerGamePpaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerGamePpas = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPlayerSeasonPpa - Player Predicated Points Added (PPA/EPA) broken down by season
   *
   * Predicted Points Added (PPA) by player season
  **/
  getPlayerSeasonPpa(
    req: operations.GetPlayerSeasonPpaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPlayerSeasonPpaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPlayerSeasonPpaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ppa/players/season";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPlayerSeasonPpaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerSeasonPpas = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPredictedPoints - Predicted Points (i.e. Expected Points or EP)
   *
   * Predicted Points
  **/
  getPredictedPoints(
    req: operations.GetPredictedPointsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPredictedPointsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPredictedPointsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ppa/predicted";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPredictedPointsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.predictedPoints = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPregameWinProbabilities - Pregame win probability data
   *
   * Pregame win probabilities
  **/
  getPregameWinProbabilities(
    req: operations.GetPregameWinProbabilitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPregameWinProbabilitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPregameWinProbabilitiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/metrics/wp/pregame";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPregameWinProbabilitiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pregameWps = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamPpa - Predicted Points Added (PPA/EPA) data by team
   *
   * Predicted Points Added (PPA)
  **/
  getTeamPpa(
    req: operations.GetTeamPpaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamPpaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamPpaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ppa/teams";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamPpaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamPpas = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getWinProbabilityData - Win probability chart data
   *
   * Win probability data
  **/
  getWinProbabilityData(
    req: operations.GetWinProbabilityDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWinProbabilityDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWinProbabilityDataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/metrics/wp";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWinProbabilityDataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playWps = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
