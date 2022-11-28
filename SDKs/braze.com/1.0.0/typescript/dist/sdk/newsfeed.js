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
var NewsFeed = /** @class */ (function () {
    function NewsFeed(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * newsFeedCardAnalytics - News Feed Card Analytics
     *
     * This endpoint allows you to retrieve a daily series of engagement stats for a card over time.
     *
     * ### Components Used
     * - [Card ID](https://www.braze.com/docs/api/identifier_types/)
     * - [News Feed List](https://www.braze.com/docs/api/endpoints/export/news_feed/get_news_feed_cards/)
     *
     * ## Response
     *
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
     *     "data" : [
     *         {
     *             "time" : (string) point in time - as ISO 8601 extended when unit is "hour" and as ISO 8601 date when unit is "day",
     *             "clicks" : (int) ,
     *             "impressions" : (int),
     *             "unique_clicks" : (int),
     *             "unique_impressions" : (int)
     *         },
     *         ...
     *     ]
     * }
     * ```
    **/
    NewsFeed.prototype.newsFeedCardAnalytics = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.NewsFeedCardAnalyticsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/feed/data_series";
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
     * newsFeedCardsDetails - News Feed Cards Details
     *
     * This endpoint allows you to retrieve relevant information on the card, which can be identified by the `card_id`.
     *
     * ### Components Used
     * - [Card ID](https://www.braze.com/docs/api/identifier_types/)
     * - [News Feed List](https://www.braze.com/docs/api/endpoints/export/news_feed/get_news_feed_cards/)
     *
     *
     * ## Response
     *
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *     "message": (required, string) The status of the export, returns 'success' when completed without errors,
     *     "created_at" : (string) Date created as ISO 8601 date,
     *     "updated_at" : (string) Date last updated as ISO 8601 date,
     *     "name" : (string) Card name,
     *     "publish_at" : (string) Date card was published as ISO 8601 date,
     *     "end_at" : (string) Date card will stop displaying for users as ISO 8601 date,
     *     "tags" : (array) Tag names associated with the card,
     *     "title" : (string) Title of the card,
     *     "image_url" : (string) Image URL used by this card,
     *     "extras" : (dictionary) Dictionary containing key-value pair data attached to this card,
     *     "description" : (string) Description text used by this card,
     *     "archived": (boolean) whether this Card is archived,
     *     "draft": (boolean) whether this Card is a draft,
     * }
     * ```
    **/
    NewsFeed.prototype.newsFeedCardsDetails = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.NewsFeedCardsDetailsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/feed/details";
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
     * newsFeedCardsList - News Feed Cards List
     *
     * This endpoint allows you to export a list of News Feed cards, each of which will include its name and Card API Identifier. The cards are returned in groups of 100 sorted by time of creation (oldest to newest by default).
     *
     *
     * ## Response
     *
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
     *     "cards" : [
     *         {
     *             "id" : (string) Card API Identifier,
     *             "type" : (string) type of the card - NewsItem (classic cards), CaptionedImage, Banner or DevPick (cross-promotional cards),
     *             "title" : (string) title of the card,
     *             "tags" : (array) tag names associated with the card
     *         },
     *         ...
     *     ]
     * }
     * ```
    **/
    NewsFeed.prototype.newsFeedCardsList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.NewsFeedCardsListRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/feed/list";
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
    return NewsFeed;
}());
export { NewsFeed };
