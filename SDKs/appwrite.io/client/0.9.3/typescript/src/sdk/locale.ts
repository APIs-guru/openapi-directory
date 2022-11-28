import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Locale {
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
   * localeGet - Get User Locale
   *
   * Get the current user location based on IP. Returns an object with user country code, country name, continent name, continent code, ip address and suggested currency. You can use the locale header to get the data in a supported language.
   * 
   * ([IP Geolocation by DB-IP](https://db-ip.com))
  **/
  localeGet(
    req: operations.LocaleGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LocaleGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LocaleGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/locale";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LocaleGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.locale = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * localeGetContinents - List Continents
   *
   * List of all continents. You can use the locale header to get the data in a supported language.
  **/
  localeGetContinents(
    req: operations.LocaleGetContinentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LocaleGetContinentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LocaleGetContinentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/locale/continents";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LocaleGetContinentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.continentList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * localeGetCountries - List Countries
   *
   * List of all countries. You can use the locale header to get the data in a supported language.
  **/
  localeGetCountries(
    req: operations.LocaleGetCountriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LocaleGetCountriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LocaleGetCountriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/locale/countries";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LocaleGetCountriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.countryList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * localeGetCountriesEu - List EU Countries
   *
   * List of all countries that are currently members of the EU. You can use the locale header to get the data in a supported language.
  **/
  localeGetCountriesEu(
    req: operations.LocaleGetCountriesEuRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LocaleGetCountriesEuResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LocaleGetCountriesEuRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/locale/countries/eu";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LocaleGetCountriesEuResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.countryList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * localeGetCountriesPhones - List Countries Phone Codes
   *
   * List of all countries phone codes. You can use the locale header to get the data in a supported language.
  **/
  localeGetCountriesPhones(
    req: operations.LocaleGetCountriesPhonesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LocaleGetCountriesPhonesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LocaleGetCountriesPhonesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/locale/countries/phones";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LocaleGetCountriesPhonesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.phoneList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * localeGetCurrencies - List Currencies
   *
   * List of all currencies, including currency symbol, name, plural, and decimal digits for all major and minor currencies. You can use the locale header to get the data in a supported language.
  **/
  localeGetCurrencies(
    req: operations.LocaleGetCurrenciesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LocaleGetCurrenciesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LocaleGetCurrenciesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/locale/currencies";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LocaleGetCurrenciesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.currencyList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * localeGetLanguages - List Languages
   *
   * List of all languages classified by ISO 639-1 including 2-letter code, name in English, and name in the respective language.
  **/
  localeGetLanguages(
    req: operations.LocaleGetLanguagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LocaleGetLanguagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LocaleGetLanguagesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/locale/languages";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LocaleGetLanguagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.languageList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
