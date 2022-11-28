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
export var DirectoryGroupsListOrderByEnum;
(function (DirectoryGroupsListOrderByEnum) {
    DirectoryGroupsListOrderByEnum["Email"] = "email";
})(DirectoryGroupsListOrderByEnum || (DirectoryGroupsListOrderByEnum = {}));
export var DirectoryGroupsListSortOrderEnum;
(function (DirectoryGroupsListSortOrderEnum) {
    DirectoryGroupsListSortOrderEnum["Ascending"] = "ASCENDING";
    DirectoryGroupsListSortOrderEnum["Descending"] = "DESCENDING";
})(DirectoryGroupsListSortOrderEnum || (DirectoryGroupsListSortOrderEnum = {}));
var DirectoryGroupsListQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryGroupsListQueryParams, _super);
    function DirectoryGroupsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryGroupsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryGroupsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryGroupsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryGroupsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customer" }),
        __metadata("design:type", String)
    ], DirectoryGroupsListQueryParams.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain" }),
        __metadata("design:type", String)
    ], DirectoryGroupsListQueryParams.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryGroupsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryGroupsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DirectoryGroupsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryGroupsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DirectoryGroupsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DirectoryGroupsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryGroupsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], DirectoryGroupsListQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryGroupsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DirectoryGroupsListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryGroupsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryGroupsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userKey" }),
        __metadata("design:type", String)
    ], DirectoryGroupsListQueryParams.prototype, "userKey", void 0);
    return DirectoryGroupsListQueryParams;
}(SpeakeasyBase));
export { DirectoryGroupsListQueryParams };
var DirectoryGroupsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryGroupsListSecurityOption1, _super);
    function DirectoryGroupsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryGroupsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryGroupsListSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryGroupsListSecurityOption1;
}(SpeakeasyBase));
export { DirectoryGroupsListSecurityOption1 };
var DirectoryGroupsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryGroupsListSecurityOption2, _super);
    function DirectoryGroupsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryGroupsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryGroupsListSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryGroupsListSecurityOption2;
}(SpeakeasyBase));
export { DirectoryGroupsListSecurityOption2 };
var DirectoryGroupsListSecurity = /** @class */ (function (_super) {
    __extends(DirectoryGroupsListSecurity, _super);
    function DirectoryGroupsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryGroupsListSecurityOption1)
    ], DirectoryGroupsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryGroupsListSecurityOption2)
    ], DirectoryGroupsListSecurity.prototype, "option2", void 0);
    return DirectoryGroupsListSecurity;
}(SpeakeasyBase));
export { DirectoryGroupsListSecurity };
var DirectoryGroupsListRequest = /** @class */ (function (_super) {
    __extends(DirectoryGroupsListRequest, _super);
    function DirectoryGroupsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryGroupsListQueryParams)
    ], DirectoryGroupsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryGroupsListSecurity)
    ], DirectoryGroupsListRequest.prototype, "security", void 0);
    return DirectoryGroupsListRequest;
}(SpeakeasyBase));
export { DirectoryGroupsListRequest };
var DirectoryGroupsListResponse = /** @class */ (function (_super) {
    __extends(DirectoryGroupsListResponse, _super);
    function DirectoryGroupsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryGroupsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Groups)
    ], DirectoryGroupsListResponse.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryGroupsListResponse.prototype, "statusCode", void 0);
    return DirectoryGroupsListResponse;
}(SpeakeasyBase));
export { DirectoryGroupsListResponse };
