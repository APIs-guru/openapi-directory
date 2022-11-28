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
var AnalyticsManagementProfileFilterLinksGetPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksGetPathParams, _super);
    function AnalyticsManagementProfileFilterLinksGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksGetPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linkId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksGetPathParams.prototype, "linkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksGetPathParams.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksGetPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementProfileFilterLinksGetPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksGetPathParams };
var AnalyticsManagementProfileFilterLinksGetQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksGetQueryParams, _super);
    function AnalyticsManagementProfileFilterLinksGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementProfileFilterLinksGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksGetQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementProfileFilterLinksGetQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksGetQueryParams };
var AnalyticsManagementProfileFilterLinksGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksGetSecurityOption1, _super);
    function AnalyticsManagementProfileFilterLinksGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementProfileFilterLinksGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementProfileFilterLinksGetSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementProfileFilterLinksGetSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksGetSecurityOption1 };
var AnalyticsManagementProfileFilterLinksGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksGetSecurityOption2, _super);
    function AnalyticsManagementProfileFilterLinksGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementProfileFilterLinksGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementProfileFilterLinksGetSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementProfileFilterLinksGetSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksGetSecurityOption2 };
var AnalyticsManagementProfileFilterLinksGetSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksGetSecurity, _super);
    function AnalyticsManagementProfileFilterLinksGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementProfileFilterLinksGetSecurityOption1)
    ], AnalyticsManagementProfileFilterLinksGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementProfileFilterLinksGetSecurityOption2)
    ], AnalyticsManagementProfileFilterLinksGetSecurity.prototype, "option2", void 0);
    return AnalyticsManagementProfileFilterLinksGetSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksGetSecurity };
var AnalyticsManagementProfileFilterLinksGetRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksGetRequest, _super);
    function AnalyticsManagementProfileFilterLinksGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfileFilterLinksGetPathParams)
    ], AnalyticsManagementProfileFilterLinksGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfileFilterLinksGetQueryParams)
    ], AnalyticsManagementProfileFilterLinksGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfileFilterLinksGetSecurity)
    ], AnalyticsManagementProfileFilterLinksGetRequest.prototype, "security", void 0);
    return AnalyticsManagementProfileFilterLinksGetRequest;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksGetRequest };
var AnalyticsManagementProfileFilterLinksGetResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksGetResponse, _super);
    function AnalyticsManagementProfileFilterLinksGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProfileFilterLink)
    ], AnalyticsManagementProfileFilterLinksGetResponse.prototype, "profileFilterLink", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementProfileFilterLinksGetResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementProfileFilterLinksGetResponse;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksGetResponse };
