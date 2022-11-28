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
var AnalyticsManagementProfilesUpdatePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfilesUpdatePathParams, _super);
    function AnalyticsManagementProfilesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesUpdatePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesUpdatePathParams.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesUpdatePathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementProfilesUpdatePathParams;
}(SpeakeasyBase));
export { AnalyticsManagementProfilesUpdatePathParams };
var AnalyticsManagementProfilesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfilesUpdateQueryParams, _super);
    function AnalyticsManagementProfilesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementProfilesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesUpdateQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementProfilesUpdateQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementProfilesUpdateQueryParams };
var AnalyticsManagementProfilesUpdateSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfilesUpdateSecurity, _super);
    function AnalyticsManagementProfilesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementProfilesUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementProfilesUpdateSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementProfilesUpdateSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementProfilesUpdateSecurity };
var AnalyticsManagementProfilesUpdateRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfilesUpdateRequest, _super);
    function AnalyticsManagementProfilesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfilesUpdatePathParams)
    ], AnalyticsManagementProfilesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfilesUpdateQueryParams)
    ], AnalyticsManagementProfilesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ProfileInput)
    ], AnalyticsManagementProfilesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfilesUpdateSecurity)
    ], AnalyticsManagementProfilesUpdateRequest.prototype, "security", void 0);
    return AnalyticsManagementProfilesUpdateRequest;
}(SpeakeasyBase));
export { AnalyticsManagementProfilesUpdateRequest };
var AnalyticsManagementProfilesUpdateResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfilesUpdateResponse, _super);
    function AnalyticsManagementProfilesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Profile)
    ], AnalyticsManagementProfilesUpdateResponse.prototype, "profile", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementProfilesUpdateResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementProfilesUpdateResponse;
}(SpeakeasyBase));
export { AnalyticsManagementProfilesUpdateResponse };
