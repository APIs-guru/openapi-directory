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
var ContentBlocks = /** @class */ (function () {
    function ContentBlocks(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * listAvailableContentBlocks - List Available Content Blocks
     *
     * This endpoint will list existing Content Block information.
     *
     * ### Successful Response Properties
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR_REST_API_KEY
     * {
     *   "count": "integer",
     *   "content_blocks": [
     *     {
     *       "content_block_id": "string",
     *       "name": "string",
     *       "content_type": "html or text",
     *       "liquid_tag": "string",
     *       "inclusion_count" : "integer",
     *       "created_at": "time-in-iso",
     *       "last_edited": "time-in-iso",
     *       "tags" : "array of strings"
     *     }
     *   ]
     * }
     * ```
     *
     * ### Possible Errors
     * - `Modified after time is invalid.`
     * The date you have provided is not a valid or parsable date. Please reformat this value as a string in ISO 8601 format (`yyyy-mm-ddThh:mm:ss.ffffff`).
     *
     * - `Modified before time is invalid.`
     * The date you have provided is not a valid or parsable date. Please reformat this value as a string in ISO 8601 format (`yyyy-mm-ddThh:mm:ss.ffffff`).
     *
     * - `Modified after time must be earlier than or the same as modified before time.`
     *
     * - `Content Block number limit is invalid.`
     * The `limit` parameter must be an integer (positive number) greater than 0.
     *
     * - `Content Block number limit must be greater than 0.`
     * The `limit` parameter must be an integer (positive number) greater than 0.
     *
     * - `Content Block number limit exceeds maximum of 1000.`
     * The `limit` parameter must be an integer (positive number) greater than 0.
     *
     * - `Offset is invalid.`
     * The `offset` parameter must be an integer (positive number) greater than 0.
     *
     * - `Offset must be greater than 0.`
     * The `offset` parameter must be an integer (positive number) greater than 0.
    **/
    ContentBlocks.prototype.listAvailableContentBlocks = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListAvailableContentBlocksRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/content_blocks/list";
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
     * seeContentBlockInformation - See Content Block Information
     *
     * This endpoint will call information for an existing Content Block.
     *
     * ### Successful Response Properties
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR_REST_API_KEY
     * {
     *   "content_block_id": "string",
     *   "name": "string",
     *   "content": "string",
     *   "description": "string",
     *   "content_type": "html or text",
     *   "tags":  "array of strings",
     *   "created_at": "time-in-iso",
     *   "last_edited": "time-in-iso",
     *   "inclusion_count" : "integer",
     *   "message": "success"
     * }
     * ```
     *
     * ### Possible Errors
     * - `Content Block ID cannot be blank.` - A Content Block has not been listed or is not encapsulated in quotes.
     *
     * - `Content Block ID is invalid for this App Group.` - This Content Block does not exist or is in a different company account or app group.
     *
     * - `Content Block has been deleted - content not available.` - This Content Block, though it may have existed earlier, has been deleted.
     *
     * - `Include Inclusion Data - error` - One of true or false is not provided.
    **/
    ContentBlocks.prototype.seeContentBlockInformation = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SeeContentBlockInformationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/content_blocks/info";
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
    return ContentBlocks;
}());
export { ContentBlocks };
