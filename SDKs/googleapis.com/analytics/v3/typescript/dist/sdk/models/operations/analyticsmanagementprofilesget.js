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
var AnalyticsManagementProfilesGetPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfilesGetPathParams, _super);
    function AnalyticsManagementProfilesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesGetPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesGetPathParams.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesGetPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementProfilesGetPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementProfilesGetPathParams };
var AnalyticsManagementProfilesGetQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfilesGetQueryParams, _super);
    function AnalyticsManagementProfilesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementProfilesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesGetQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementProfilesGetQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementProfilesGetQueryParams };
var AnalyticsManagementProfilesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfilesGetSecurityOption1, _super);
    function AnalyticsManagementProfilesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementProfilesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementProfilesGetSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementProfilesGetSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementProfilesGetSecurityOption1 };
var AnalyticsManagementProfilesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfilesGetSecurityOption2, _super);
    function AnalyticsManagementProfilesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementProfilesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementProfilesGetSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementProfilesGetSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementProfilesGetSecurityOption2 };
var AnalyticsManagementProfilesGetSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfilesGetSecurity, _super);
    function AnalyticsManagementProfilesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementProfilesGetSecurityOption1)
    ], AnalyticsManagementProfilesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementProfilesGetSecurityOption2)
    ], AnalyticsManagementProfilesGetSecurity.prototype, "option2", void 0);
    return AnalyticsManagementProfilesGetSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementProfilesGetSecurity };
var AnalyticsManagementProfilesGetRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfilesGetRequest, _super);
    function AnalyticsManagementProfilesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfilesGetPathParams)
    ], AnalyticsManagementProfilesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfilesGetQueryParams)
    ], AnalyticsManagementProfilesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfilesGetSecurity)
    ], AnalyticsManagementProfilesGetRequest.prototype, "security", void 0);
    return AnalyticsManagementProfilesGetRequest;
}(SpeakeasyBase));
export { AnalyticsManagementProfilesGetRequest };
var AnalyticsManagementProfilesGetResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfilesGetResponse, _super);
    function AnalyticsManagementProfilesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Profile)
    ], AnalyticsManagementProfilesGetResponse.prototype, "profile", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementProfilesGetResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementProfilesGetResponse;
}(SpeakeasyBase));
export { AnalyticsManagementProfilesGetResponse };
