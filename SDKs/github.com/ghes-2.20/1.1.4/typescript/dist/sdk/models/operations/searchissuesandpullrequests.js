var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export var SearchIssuesAndPullRequestsSortEnum;
(function (SearchIssuesAndPullRequestsSortEnum) {
    SearchIssuesAndPullRequestsSortEnum["Comments"] = "comments";
    SearchIssuesAndPullRequestsSortEnum["Reactions"] = "reactions";
    SearchIssuesAndPullRequestsSortEnum["ReactionsPlus1"] = "reactions-+1";
    SearchIssuesAndPullRequestsSortEnum["Reactions1"] = "reactions--1";
    SearchIssuesAndPullRequestsSortEnum["ReactionsSmile"] = "reactions-smile";
    SearchIssuesAndPullRequestsSortEnum["ReactionsThinkingFace"] = "reactions-thinking_face";
    SearchIssuesAndPullRequestsSortEnum["ReactionsHeart"] = "reactions-heart";
    SearchIssuesAndPullRequestsSortEnum["ReactionsTada"] = "reactions-tada";
    SearchIssuesAndPullRequestsSortEnum["Interactions"] = "interactions";
    SearchIssuesAndPullRequestsSortEnum["Created"] = "created";
    SearchIssuesAndPullRequestsSortEnum["Updated"] = "updated";
})(SearchIssuesAndPullRequestsSortEnum || (SearchIssuesAndPullRequestsSortEnum = {}));
var SearchIssuesAndPullRequestsQueryParams = /** @class */ (function (_super) {
    __extends(SearchIssuesAndPullRequestsQueryParams, _super);
    function SearchIssuesAndPullRequestsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], SearchIssuesAndPullRequestsQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], SearchIssuesAndPullRequestsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], SearchIssuesAndPullRequestsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], SearchIssuesAndPullRequestsQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], SearchIssuesAndPullRequestsQueryParams.prototype, "sort", void 0);
    return SearchIssuesAndPullRequestsQueryParams;
}(SpeakeasyBase));
export { SearchIssuesAndPullRequestsQueryParams };
var SearchIssuesAndPullRequests200ApplicationJson = /** @class */ (function (_super) {
    __extends(SearchIssuesAndPullRequests200ApplicationJson, _super);
    function SearchIssuesAndPullRequests200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incomplete_results" }),
        __metadata("design:type", Boolean)
    ], SearchIssuesAndPullRequests200ApplicationJson.prototype, "incompleteResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: shared.IssueSearchResultItem }),
        __metadata("design:type", Array)
    ], SearchIssuesAndPullRequests200ApplicationJson.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], SearchIssuesAndPullRequests200ApplicationJson.prototype, "totalCount", void 0);
    return SearchIssuesAndPullRequests200ApplicationJson;
}(SpeakeasyBase));
export { SearchIssuesAndPullRequests200ApplicationJson };
var SearchIssuesAndPullRequests503ApplicationJson = /** @class */ (function (_super) {
    __extends(SearchIssuesAndPullRequests503ApplicationJson, _super);
    function SearchIssuesAndPullRequests503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], SearchIssuesAndPullRequests503ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], SearchIssuesAndPullRequests503ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SearchIssuesAndPullRequests503ApplicationJson.prototype, "message", void 0);
    return SearchIssuesAndPullRequests503ApplicationJson;
}(SpeakeasyBase));
export { SearchIssuesAndPullRequests503ApplicationJson };
var SearchIssuesAndPullRequestsRequest = /** @class */ (function (_super) {
    __extends(SearchIssuesAndPullRequestsRequest, _super);
    function SearchIssuesAndPullRequestsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchIssuesAndPullRequestsQueryParams)
    ], SearchIssuesAndPullRequestsRequest.prototype, "queryParams", void 0);
    return SearchIssuesAndPullRequestsRequest;
}(SpeakeasyBase));
export { SearchIssuesAndPullRequestsRequest };
var SearchIssuesAndPullRequestsResponse = /** @class */ (function (_super) {
    __extends(SearchIssuesAndPullRequestsResponse, _super);
    function SearchIssuesAndPullRequestsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchIssuesAndPullRequestsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchIssuesAndPullRequestsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], SearchIssuesAndPullRequestsResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchIssuesAndPullRequests200ApplicationJson)
    ], SearchIssuesAndPullRequestsResponse.prototype, "searchIssuesAndPullRequests200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchIssuesAndPullRequests503ApplicationJson)
    ], SearchIssuesAndPullRequestsResponse.prototype, "searchIssuesAndPullRequests503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], SearchIssuesAndPullRequestsResponse.prototype, "validationError", void 0);
    return SearchIssuesAndPullRequestsResponse;
}(SpeakeasyBase));
export { SearchIssuesAndPullRequestsResponse };
