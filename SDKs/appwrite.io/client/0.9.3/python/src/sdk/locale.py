import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Locale:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def locale_get(self, request: operations.LocaleGetRequest) -> operations.LocaleGetResponse:
        r"""Get User Locale
        Get the current user location based on IP. Returns an object with user country code, country name, continent name, continent code, ip address and suggested currency. You can use the locale header to get the data in a supported language.
        
        ([IP Geolocation by DB-IP](https://db-ip.com))
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/locale"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LocaleGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Locale])
                res.locale = out

        return res

    
    def locale_get_continents(self, request: operations.LocaleGetContinentsRequest) -> operations.LocaleGetContinentsResponse:
        r"""List Continents
        List of all continents. You can use the locale header to get the data in a supported language.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/locale/continents"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LocaleGetContinentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContinentList])
                res.continent_list = out

        return res

    
    def locale_get_countries(self, request: operations.LocaleGetCountriesRequest) -> operations.LocaleGetCountriesResponse:
        r"""List Countries
        List of all countries. You can use the locale header to get the data in a supported language.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/locale/countries"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LocaleGetCountriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CountryList])
                res.country_list = out

        return res

    
    def locale_get_countries_eu(self, request: operations.LocaleGetCountriesEuRequest) -> operations.LocaleGetCountriesEuResponse:
        r"""List EU Countries
        List of all countries that are currently members of the EU. You can use the locale header to get the data in a supported language.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/locale/countries/eu"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LocaleGetCountriesEuResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CountryList])
                res.country_list = out

        return res

    
    def locale_get_countries_phones(self, request: operations.LocaleGetCountriesPhonesRequest) -> operations.LocaleGetCountriesPhonesResponse:
        r"""List Countries Phone Codes
        List of all countries phone codes. You can use the locale header to get the data in a supported language.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/locale/countries/phones"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LocaleGetCountriesPhonesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PhoneList])
                res.phone_list = out

        return res

    
    def locale_get_currencies(self, request: operations.LocaleGetCurrenciesRequest) -> operations.LocaleGetCurrenciesResponse:
        r"""List Currencies
        List of all currencies, including currency symbol, name, plural, and decimal digits for all major and minor currencies. You can use the locale header to get the data in a supported language.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/locale/currencies"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LocaleGetCurrenciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CurrencyList])
                res.currency_list = out

        return res

    
    def locale_get_languages(self, request: operations.LocaleGetLanguagesRequest) -> operations.LocaleGetLanguagesResponse:
        r"""List Languages
        List of all languages classified by ISO 639-1 including 2-letter code, name in English, and name in the respective language.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/locale/languages"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LocaleGetLanguagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LanguageList])
                res.language_list = out

        return res

    