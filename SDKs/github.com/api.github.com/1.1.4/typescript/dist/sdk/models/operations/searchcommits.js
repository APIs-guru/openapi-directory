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
export var SearchCommitsSortEnum;
(function (SearchCommitsSortEnum) {
    SearchCommitsSortEnum["AuthorDate"] = "author-date";
    SearchCommitsSortEnum["CommitterDate"] = "committer-date";
})(SearchCommitsSortEnum || (SearchCommitsSortEnum = {}));
var SearchCommitsQueryParams = /** @class */ (function (_super) {
    __extends(SearchCommitsQueryParams, _super);
    function SearchCommitsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], SearchCommitsQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], SearchCommitsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], SearchCommitsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], SearchCommitsQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], SearchCommitsQueryParams.prototype, "sort", void 0);
    return SearchCommitsQueryParams;
}(SpeakeasyBase));
export { SearchCommitsQueryParams };
var SearchCommits200ApplicationJson = /** @class */ (function (_super) {
    __extends(SearchCommits200ApplicationJson, _super);
    function SearchCommits200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incomplete_results" }),
        __metadata("design:type", Boolean)
    ], SearchCommits200ApplicationJson.prototype, "incompleteResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: shared.CommitSearchResultItem }),
        __metadata("design:type", Array)
    ], SearchCommits200ApplicationJson.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], SearchCommits200ApplicationJson.prototype, "totalCount", void 0);
    return SearchCommits200ApplicationJson;
}(SpeakeasyBase));
export { SearchCommits200ApplicationJson };
var SearchCommits415ApplicationJson = /** @class */ (function (_super) {
    __extends(SearchCommits415ApplicationJson, _super);
    function SearchCommits415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], SearchCommits415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SearchCommits415ApplicationJson.prototype, "message", void 0);
    return SearchCommits415ApplicationJson;
}(SpeakeasyBase));
export { SearchCommits415ApplicationJson };
var SearchCommitsRequest = /** @class */ (function (_super) {
    __extends(SearchCommitsRequest, _super);
    function SearchCommitsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchCommitsQueryParams)
    ], SearchCommitsRequest.prototype, "queryParams", void 0);
    return SearchCommitsRequest;
}(SpeakeasyBase));
export { SearchCommitsRequest };
var SearchCommitsResponse = /** @class */ (function (_super) {
    __extends(SearchCommitsResponse, _super);
    function SearchCommitsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchCommitsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchCommitsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchCommits200ApplicationJson)
    ], SearchCommitsResponse.prototype, "searchCommits200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchCommits415ApplicationJson)
    ], SearchCommitsResponse.prototype, "searchCommits415ApplicationJsonObject", void 0);
    return SearchCommitsResponse;
}(SpeakeasyBase));
export { SearchCommitsResponse };
