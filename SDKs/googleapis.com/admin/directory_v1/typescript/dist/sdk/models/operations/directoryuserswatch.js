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
export var DirectoryUsersWatchEventEnum;
(function (DirectoryUsersWatchEventEnum) {
    DirectoryUsersWatchEventEnum["Add"] = "add";
    DirectoryUsersWatchEventEnum["Delete"] = "delete";
    DirectoryUsersWatchEventEnum["MakeAdmin"] = "makeAdmin";
    DirectoryUsersWatchEventEnum["Undelete"] = "undelete";
    DirectoryUsersWatchEventEnum["Update"] = "update";
})(DirectoryUsersWatchEventEnum || (DirectoryUsersWatchEventEnum = {}));
export var DirectoryUsersWatchOrderByEnum;
(function (DirectoryUsersWatchOrderByEnum) {
    DirectoryUsersWatchOrderByEnum["Email"] = "email";
    DirectoryUsersWatchOrderByEnum["FamilyName"] = "familyName";
    DirectoryUsersWatchOrderByEnum["GivenName"] = "givenName";
})(DirectoryUsersWatchOrderByEnum || (DirectoryUsersWatchOrderByEnum = {}));
export var DirectoryUsersWatchProjectionEnum;
(function (DirectoryUsersWatchProjectionEnum) {
    DirectoryUsersWatchProjectionEnum["Basic"] = "basic";
    DirectoryUsersWatchProjectionEnum["Custom"] = "custom";
    DirectoryUsersWatchProjectionEnum["Full"] = "full";
})(DirectoryUsersWatchProjectionEnum || (DirectoryUsersWatchProjectionEnum = {}));
export var DirectoryUsersWatchSortOrderEnum;
(function (DirectoryUsersWatchSortOrderEnum) {
    DirectoryUsersWatchSortOrderEnum["Ascending"] = "ASCENDING";
    DirectoryUsersWatchSortOrderEnum["Descending"] = "DESCENDING";
})(DirectoryUsersWatchSortOrderEnum || (DirectoryUsersWatchSortOrderEnum = {}));
export var DirectoryUsersWatchViewTypeEnum;
(function (DirectoryUsersWatchViewTypeEnum) {
    DirectoryUsersWatchViewTypeEnum["AdminView"] = "admin_view";
    DirectoryUsersWatchViewTypeEnum["DomainPublic"] = "domain_public";
})(DirectoryUsersWatchViewTypeEnum || (DirectoryUsersWatchViewTypeEnum = {}));
var DirectoryUsersWatchQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryUsersWatchQueryParams, _super);
    function DirectoryUsersWatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryUsersWatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryUsersWatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryUsersWatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryUsersWatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customFieldMask" }),
        __metadata("design:type", String)
    ], DirectoryUsersWatchQueryParams.prototype, "customFieldMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customer" }),
        __metadata("design:type", String)
    ], DirectoryUsersWatchQueryParams.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain" }),
        __metadata("design:type", String)
    ], DirectoryUsersWatchQueryParams.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=event" }),
        __metadata("design:type", String)
    ], DirectoryUsersWatchQueryParams.prototype, "event", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryUsersWatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryUsersWatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DirectoryUsersWatchQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryUsersWatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DirectoryUsersWatchQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DirectoryUsersWatchQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryUsersWatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], DirectoryUsersWatchQueryParams.prototype, "projection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], DirectoryUsersWatchQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryUsersWatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showDeleted" }),
        __metadata("design:type", String)
    ], DirectoryUsersWatchQueryParams.prototype, "showDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DirectoryUsersWatchQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryUsersWatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryUsersWatchQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=viewType" }),
        __metadata("design:type", String)
    ], DirectoryUsersWatchQueryParams.prototype, "viewType", void 0);
    return DirectoryUsersWatchQueryParams;
}(SpeakeasyBase));
export { DirectoryUsersWatchQueryParams };
var DirectoryUsersWatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryUsersWatchSecurityOption1, _super);
    function DirectoryUsersWatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryUsersWatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryUsersWatchSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryUsersWatchSecurityOption1;
}(SpeakeasyBase));
export { DirectoryUsersWatchSecurityOption1 };
var DirectoryUsersWatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryUsersWatchSecurityOption2, _super);
    function DirectoryUsersWatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryUsersWatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryUsersWatchSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryUsersWatchSecurityOption2;
}(SpeakeasyBase));
export { DirectoryUsersWatchSecurityOption2 };
var DirectoryUsersWatchSecurityOption3 = /** @class */ (function (_super) {
    __extends(DirectoryUsersWatchSecurityOption3, _super);
    function DirectoryUsersWatchSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryUsersWatchSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryUsersWatchSecurityOption3.prototype, "oauth2c", void 0);
    return DirectoryUsersWatchSecurityOption3;
}(SpeakeasyBase));
export { DirectoryUsersWatchSecurityOption3 };
var DirectoryUsersWatchSecurity = /** @class */ (function (_super) {
    __extends(DirectoryUsersWatchSecurity, _super);
    function DirectoryUsersWatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryUsersWatchSecurityOption1)
    ], DirectoryUsersWatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryUsersWatchSecurityOption2)
    ], DirectoryUsersWatchSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryUsersWatchSecurityOption3)
    ], DirectoryUsersWatchSecurity.prototype, "option3", void 0);
    return DirectoryUsersWatchSecurity;
}(SpeakeasyBase));
export { DirectoryUsersWatchSecurity };
var DirectoryUsersWatchRequest = /** @class */ (function (_super) {
    __extends(DirectoryUsersWatchRequest, _super);
    function DirectoryUsersWatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryUsersWatchQueryParams)
    ], DirectoryUsersWatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Channel)
    ], DirectoryUsersWatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryUsersWatchSecurity)
    ], DirectoryUsersWatchRequest.prototype, "security", void 0);
    return DirectoryUsersWatchRequest;
}(SpeakeasyBase));
export { DirectoryUsersWatchRequest };
var DirectoryUsersWatchResponse = /** @class */ (function (_super) {
    __extends(DirectoryUsersWatchResponse, _super);
    function DirectoryUsersWatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Channel)
    ], DirectoryUsersWatchResponse.prototype, "channel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryUsersWatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryUsersWatchResponse.prototype, "statusCode", void 0);
    return DirectoryUsersWatchResponse;
}(SpeakeasyBase));
export { DirectoryUsersWatchResponse };
