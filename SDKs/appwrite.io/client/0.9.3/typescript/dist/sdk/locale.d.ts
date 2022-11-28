import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Locale {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * localeGet - Get User Locale
     *
     * Get the current user location based on IP. Returns an object with user country code, country name, continent name, continent code, ip address and suggested currency. You can use the locale header to get the data in a supported language.
     *
     * ([IP Geolocation by DB-IP](https://db-ip.com))
    **/
    localeGet(req: operations.LocaleGetRequest, config?: AxiosRequestConfig): Promise<operations.LocaleGetResponse>;
    /**
     * localeGetContinents - List Continents
     *
     * List of all continents. You can use the locale header to get the data in a supported language.
    **/
    localeGetContinents(req: operations.LocaleGetContinentsRequest, config?: AxiosRequestConfig): Promise<operations.LocaleGetContinentsResponse>;
    /**
     * localeGetCountries - List Countries
     *
     * List of all countries. You can use the locale header to get the data in a supported language.
    **/
    localeGetCountries(req: operations.LocaleGetCountriesRequest, config?: AxiosRequestConfig): Promise<operations.LocaleGetCountriesResponse>;
    /**
     * localeGetCountriesEu - List EU Countries
     *
     * List of all countries that are currently members of the EU. You can use the locale header to get the data in a supported language.
    **/
    localeGetCountriesEu(req: operations.LocaleGetCountriesEuRequest, config?: AxiosRequestConfig): Promise<operations.LocaleGetCountriesEuResponse>;
    /**
     * localeGetCountriesPhones - List Countries Phone Codes
     *
     * List of all countries phone codes. You can use the locale header to get the data in a supported language.
    **/
    localeGetCountriesPhones(req: operations.LocaleGetCountriesPhonesRequest, config?: AxiosRequestConfig): Promise<operations.LocaleGetCountriesPhonesResponse>;
    /**
     * localeGetCurrencies - List Currencies
     *
     * List of all currencies, including currency symbol, name, plural, and decimal digits for all major and minor currencies. You can use the locale header to get the data in a supported language.
    **/
    localeGetCurrencies(req: operations.LocaleGetCurrenciesRequest, config?: AxiosRequestConfig): Promise<operations.LocaleGetCurrenciesResponse>;
    /**
     * localeGetLanguages - List Languages
     *
     * List of all languages classified by ISO 639-1 including 2-letter code, name in English, and name in the respective language.
    **/
    localeGetLanguages(req: operations.LocaleGetLanguagesRequest, config?: AxiosRequestConfig): Promise<operations.LocaleGetLanguagesResponse>;
}
