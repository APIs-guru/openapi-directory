import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Locations {
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
   * getVersionLocationsFormat - Unpaginated geojson response
   *
   * <p><strong>This endpoint behaves exactly like</strong> <code>incidents</code>, but returns a valid geojson <code>FeatureCollection</code> that looks like this:</p>
   * 
   * <pre><code>{
   *   type: "FeatureCollection",
   *   features: [
   *     {
   *       type: "Feature",
   *       properties: {
   *       id: 4474199,
   *       type: "Theft",
   *       occurred_at: 1428536937
   *     },
   *       geometry: {
   *       type: "Point",
   *       coordinates: [ -122.6244177, 45.5164386 ]
   *     }
   *   }
   * }
   * </code></pre>
   * 
   * <p>It doesn’t paginate. If you pass the <code>all</code> parameter it returns all matches (which can be big, &gt; 4mb), otherwise it returns the 100 most recent.</p>
   * 
   * <p><strong>Go forth and make maps!</strong></p>
   * 
  **/
  getVersionLocationsFormat(
    req: operations.GetVersionLocationsFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVersionLocationsFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVersionLocationsFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/locations";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetVersionLocationsFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getVersionLocationsMarkersFormat - Unpaginated geojson response with simplestyled markers
   *
   * <p>This behaves exactly like the root <code>locations</code> endpoint, but returns <a href="https://github.com/mapbox/simplestyle-spec">simplestyled markers</a> (<a href="https://www.mapbox.com/guides/markers/#simple-style">mapbox styled markers</a>)</p>
   * 
   * <p><strong>Go forth and make maps!</strong></p>
   * 
  **/
  getVersionLocationsMarkersFormat(
    req: operations.GetVersionLocationsMarkersFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVersionLocationsMarkersFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVersionLocationsMarkersFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/locations/markers";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetVersionLocationsMarkersFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
