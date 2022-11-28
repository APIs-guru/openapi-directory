var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
var Locations = /** @class */ (function () {
    function Locations(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
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
    Locations.prototype.getVersionLocationsFormat = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetVersionLocationsFormatRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v2/locations";
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getVersionLocationsMarkersFormat - Unpaginated geojson response with simplestyled markers
     *
     * <p>This behaves exactly like the root <code>locations</code> endpoint, but returns <a href="https://github.com/mapbox/simplestyle-spec">simplestyled markers</a> (<a href="https://www.mapbox.com/guides/markers/#simple-style">mapbox styled markers</a>)</p>
     *
     * <p><strong>Go forth and make maps!</strong></p>
     *
    **/
    Locations.prototype.getVersionLocationsMarkersFormat = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetVersionLocationsMarkersFormatRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v2/locations/markers";
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return Locations;
}());
export { Locations };
