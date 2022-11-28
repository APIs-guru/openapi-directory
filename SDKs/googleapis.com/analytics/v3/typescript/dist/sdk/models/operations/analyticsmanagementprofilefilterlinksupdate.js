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
var AnalyticsManagementProfileFilterLinksUpdatePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksUpdatePathParams, _super);
    function AnalyticsManagementProfileFilterLinksUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksUpdatePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linkId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksUpdatePathParams.prototype, "linkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksUpdatePathParams.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksUpdatePathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementProfileFilterLinksUpdatePathParams;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksUpdatePathParams };
var AnalyticsManagementProfileFilterLinksUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksUpdateQueryParams, _super);
    function AnalyticsManagementProfileFilterLinksUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementProfileFilterLinksUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksUpdateQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementProfileFilterLinksUpdateQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksUpdateQueryParams };
var AnalyticsManagementProfileFilterLinksUpdateSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksUpdateSecurity, _super);
    function AnalyticsManagementProfileFilterLinksUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementProfileFilterLinksUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementProfileFilterLinksUpdateSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementProfileFilterLinksUpdateSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksUpdateSecurity };
var AnalyticsManagementProfileFilterLinksUpdateRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksUpdateRequest, _super);
    function AnalyticsManagementProfileFilterLinksUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfileFilterLinksUpdatePathParams)
    ], AnalyticsManagementProfileFilterLinksUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfileFilterLinksUpdateQueryParams)
    ], AnalyticsManagementProfileFilterLinksUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ProfileFilterLinkInput)
    ], AnalyticsManagementProfileFilterLinksUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfileFilterLinksUpdateSecurity)
    ], AnalyticsManagementProfileFilterLinksUpdateRequest.prototype, "security", void 0);
    return AnalyticsManagementProfileFilterLinksUpdateRequest;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksUpdateRequest };
var AnalyticsManagementProfileFilterLinksUpdateResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksUpdateResponse, _super);
    function AnalyticsManagementProfileFilterLinksUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProfileFilterLink)
    ], AnalyticsManagementProfileFilterLinksUpdateResponse.prototype, "profileFilterLink", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementProfileFilterLinksUpdateResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementProfileFilterLinksUpdateResponse;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksUpdateResponse };
