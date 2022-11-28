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
export var DirectoryUsersListEventEnum;
(function (DirectoryUsersListEventEnum) {
    DirectoryUsersListEventEnum["Add"] = "add";
    DirectoryUsersListEventEnum["Delete"] = "delete";
    DirectoryUsersListEventEnum["MakeAdmin"] = "makeAdmin";
    DirectoryUsersListEventEnum["Undelete"] = "undelete";
    DirectoryUsersListEventEnum["Update"] = "update";
})(DirectoryUsersListEventEnum || (DirectoryUsersListEventEnum = {}));
export var DirectoryUsersListOrderByEnum;
(function (DirectoryUsersListOrderByEnum) {
    DirectoryUsersListOrderByEnum["Email"] = "email";
    DirectoryUsersListOrderByEnum["FamilyName"] = "familyName";
    DirectoryUsersListOrderByEnum["GivenName"] = "givenName";
})(DirectoryUsersListOrderByEnum || (DirectoryUsersListOrderByEnum = {}));
export var DirectoryUsersListProjectionEnum;
(function (DirectoryUsersListProjectionEnum) {
    DirectoryUsersListProjectionEnum["Basic"] = "basic";
    DirectoryUsersListProjectionEnum["Custom"] = "custom";
    DirectoryUsersListProjectionEnum["Full"] = "full";
})(DirectoryUsersListProjectionEnum || (DirectoryUsersListProjectionEnum = {}));
export var DirectoryUsersListSortOrderEnum;
(function (DirectoryUsersListSortOrderEnum) {
    DirectoryUsersListSortOrderEnum["Ascending"] = "ASCENDING";
    DirectoryUsersListSortOrderEnum["Descending"] = "DESCENDING";
})(DirectoryUsersListSortOrderEnum || (DirectoryUsersListSortOrderEnum = {}));
export var DirectoryUsersListViewTypeEnum;
(function (DirectoryUsersListViewTypeEnum) {
    DirectoryUsersListViewTypeEnum["AdminView"] = "admin_view";
    DirectoryUsersListViewTypeEnum["DomainPublic"] = "domain_public";
})(DirectoryUsersListViewTypeEnum || (DirectoryUsersListViewTypeEnum = {}));
var DirectoryUsersListQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryUsersListQueryParams, _super);
    function DirectoryUsersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryUsersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryUsersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryUsersListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryUsersListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customFieldMask" }),
        __metadata("design:type", String)
    ], DirectoryUsersListQueryParams.prototype, "customFieldMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customer" }),
        __metadata("design:type", String)
    ], DirectoryUsersListQueryParams.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain" }),
        __metadata("design:type", String)
    ], DirectoryUsersListQueryParams.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=event" }),
        __metadata("design:type", String)
    ], DirectoryUsersListQueryParams.prototype, "event", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryUsersListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryUsersListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DirectoryUsersListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryUsersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DirectoryUsersListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DirectoryUsersListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryUsersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], DirectoryUsersListQueryParams.prototype, "projection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], DirectoryUsersListQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryUsersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showDeleted" }),
        __metadata("design:type", String)
    ], DirectoryUsersListQueryParams.prototype, "showDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DirectoryUsersListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryUsersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryUsersListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=viewType" }),
        __metadata("design:type", String)
    ], DirectoryUsersListQueryParams.prototype, "viewType", void 0);
    return DirectoryUsersListQueryParams;
}(SpeakeasyBase));
export { DirectoryUsersListQueryParams };
var DirectoryUsersListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryUsersListSecurityOption1, _super);
    function DirectoryUsersListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryUsersListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryUsersListSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryUsersListSecurityOption1;
}(SpeakeasyBase));
export { DirectoryUsersListSecurityOption1 };
var DirectoryUsersListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryUsersListSecurityOption2, _super);
    function DirectoryUsersListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryUsersListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryUsersListSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryUsersListSecurityOption2;
}(SpeakeasyBase));
export { DirectoryUsersListSecurityOption2 };
var DirectoryUsersListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DirectoryUsersListSecurityOption3, _super);
    function DirectoryUsersListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryUsersListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryUsersListSecurityOption3.prototype, "oauth2c", void 0);
    return DirectoryUsersListSecurityOption3;
}(SpeakeasyBase));
export { DirectoryUsersListSecurityOption3 };
var DirectoryUsersListSecurity = /** @class */ (function (_super) {
    __extends(DirectoryUsersListSecurity, _super);
    function DirectoryUsersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryUsersListSecurityOption1)
    ], DirectoryUsersListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryUsersListSecurityOption2)
    ], DirectoryUsersListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryUsersListSecurityOption3)
    ], DirectoryUsersListSecurity.prototype, "option3", void 0);
    return DirectoryUsersListSecurity;
}(SpeakeasyBase));
export { DirectoryUsersListSecurity };
var DirectoryUsersListRequest = /** @class */ (function (_super) {
    __extends(DirectoryUsersListRequest, _super);
    function DirectoryUsersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryUsersListQueryParams)
    ], DirectoryUsersListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryUsersListSecurity)
    ], DirectoryUsersListRequest.prototype, "security", void 0);
    return DirectoryUsersListRequest;
}(SpeakeasyBase));
export { DirectoryUsersListRequest };
var DirectoryUsersListResponse = /** @class */ (function (_super) {
    __extends(DirectoryUsersListResponse, _super);
    function DirectoryUsersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryUsersListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryUsersListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Users)
    ], DirectoryUsersListResponse.prototype, "users", void 0);
    return DirectoryUsersListResponse;
}(SpeakeasyBase));
export { DirectoryUsersListResponse };
