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
var DirectoryUsersGetPathParams = /** @class */ (function (_super) {
    __extends(DirectoryUsersGetPathParams, _super);
    function DirectoryUsersGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userKey" }),
        __metadata("design:type", String)
    ], DirectoryUsersGetPathParams.prototype, "userKey", void 0);
    return DirectoryUsersGetPathParams;
}(SpeakeasyBase));
export { DirectoryUsersGetPathParams };
export var DirectoryUsersGetProjectionEnum;
(function (DirectoryUsersGetProjectionEnum) {
    DirectoryUsersGetProjectionEnum["Basic"] = "basic";
    DirectoryUsersGetProjectionEnum["Custom"] = "custom";
    DirectoryUsersGetProjectionEnum["Full"] = "full";
})(DirectoryUsersGetProjectionEnum || (DirectoryUsersGetProjectionEnum = {}));
export var DirectoryUsersGetViewTypeEnum;
(function (DirectoryUsersGetViewTypeEnum) {
    DirectoryUsersGetViewTypeEnum["AdminView"] = "admin_view";
    DirectoryUsersGetViewTypeEnum["DomainPublic"] = "domain_public";
})(DirectoryUsersGetViewTypeEnum || (DirectoryUsersGetViewTypeEnum = {}));
var DirectoryUsersGetQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryUsersGetQueryParams, _super);
    function DirectoryUsersGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryUsersGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryUsersGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryUsersGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryUsersGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customFieldMask" }),
        __metadata("design:type", String)
    ], DirectoryUsersGetQueryParams.prototype, "customFieldMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryUsersGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryUsersGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryUsersGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryUsersGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], DirectoryUsersGetQueryParams.prototype, "projection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryUsersGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryUsersGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryUsersGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=viewType" }),
        __metadata("design:type", String)
    ], DirectoryUsersGetQueryParams.prototype, "viewType", void 0);
    return DirectoryUsersGetQueryParams;
}(SpeakeasyBase));
export { DirectoryUsersGetQueryParams };
var DirectoryUsersGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryUsersGetSecurityOption1, _super);
    function DirectoryUsersGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryUsersGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryUsersGetSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryUsersGetSecurityOption1;
}(SpeakeasyBase));
export { DirectoryUsersGetSecurityOption1 };
var DirectoryUsersGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryUsersGetSecurityOption2, _super);
    function DirectoryUsersGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryUsersGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryUsersGetSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryUsersGetSecurityOption2;
}(SpeakeasyBase));
export { DirectoryUsersGetSecurityOption2 };
var DirectoryUsersGetSecurity = /** @class */ (function (_super) {
    __extends(DirectoryUsersGetSecurity, _super);
    function DirectoryUsersGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryUsersGetSecurityOption1)
    ], DirectoryUsersGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryUsersGetSecurityOption2)
    ], DirectoryUsersGetSecurity.prototype, "option2", void 0);
    return DirectoryUsersGetSecurity;
}(SpeakeasyBase));
export { DirectoryUsersGetSecurity };
var DirectoryUsersGetRequest = /** @class */ (function (_super) {
    __extends(DirectoryUsersGetRequest, _super);
    function DirectoryUsersGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryUsersGetPathParams)
    ], DirectoryUsersGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryUsersGetQueryParams)
    ], DirectoryUsersGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryUsersGetSecurity)
    ], DirectoryUsersGetRequest.prototype, "security", void 0);
    return DirectoryUsersGetRequest;
}(SpeakeasyBase));
export { DirectoryUsersGetRequest };
var DirectoryUsersGetResponse = /** @class */ (function (_super) {
    __extends(DirectoryUsersGetResponse, _super);
    function DirectoryUsersGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryUsersGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryUsersGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.User)
    ], DirectoryUsersGetResponse.prototype, "user", void 0);
    return DirectoryUsersGetResponse;
}(SpeakeasyBase));
export { DirectoryUsersGetResponse };
