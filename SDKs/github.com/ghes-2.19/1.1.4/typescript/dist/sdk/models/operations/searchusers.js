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
export var SearchUsersSortEnum;
(function (SearchUsersSortEnum) {
    SearchUsersSortEnum["Followers"] = "followers";
    SearchUsersSortEnum["Repositories"] = "repositories";
    SearchUsersSortEnum["Joined"] = "joined";
})(SearchUsersSortEnum || (SearchUsersSortEnum = {}));
var SearchUsersQueryParams = /** @class */ (function (_super) {
    __extends(SearchUsersQueryParams, _super);
    function SearchUsersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], SearchUsersQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], SearchUsersQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], SearchUsersQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], SearchUsersQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], SearchUsersQueryParams.prototype, "sort", void 0);
    return SearchUsersQueryParams;
}(SpeakeasyBase));
export { SearchUsersQueryParams };
var SearchUsers200ApplicationJson = /** @class */ (function (_super) {
    __extends(SearchUsers200ApplicationJson, _super);
    function SearchUsers200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incomplete_results" }),
        __metadata("design:type", Boolean)
    ], SearchUsers200ApplicationJson.prototype, "incompleteResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: shared.UserSearchResultItem }),
        __metadata("design:type", Array)
    ], SearchUsers200ApplicationJson.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], SearchUsers200ApplicationJson.prototype, "totalCount", void 0);
    return SearchUsers200ApplicationJson;
}(SpeakeasyBase));
export { SearchUsers200ApplicationJson };
var SearchUsers503ApplicationJson = /** @class */ (function (_super) {
    __extends(SearchUsers503ApplicationJson, _super);
    function SearchUsers503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], SearchUsers503ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], SearchUsers503ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SearchUsers503ApplicationJson.prototype, "message", void 0);
    return SearchUsers503ApplicationJson;
}(SpeakeasyBase));
export { SearchUsers503ApplicationJson };
var SearchUsersRequest = /** @class */ (function (_super) {
    __extends(SearchUsersRequest, _super);
    function SearchUsersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchUsersQueryParams)
    ], SearchUsersRequest.prototype, "queryParams", void 0);
    return SearchUsersRequest;
}(SpeakeasyBase));
export { SearchUsersRequest };
var SearchUsersResponse = /** @class */ (function (_super) {
    __extends(SearchUsersResponse, _super);
    function SearchUsersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchUsersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchUsersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchUsers200ApplicationJson)
    ], SearchUsersResponse.prototype, "searchUsers200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchUsers503ApplicationJson)
    ], SearchUsersResponse.prototype, "searchUsers503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], SearchUsersResponse.prototype, "validationError", void 0);
    return SearchUsersResponse;
}(SpeakeasyBase));
export { SearchUsersResponse };
