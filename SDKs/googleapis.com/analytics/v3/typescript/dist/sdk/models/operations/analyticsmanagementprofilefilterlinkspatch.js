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
var AnalyticsManagementProfileFilterLinksPatchPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksPatchPathParams, _super);
    function AnalyticsManagementProfileFilterLinksPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksPatchPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linkId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksPatchPathParams.prototype, "linkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksPatchPathParams.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksPatchPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementProfileFilterLinksPatchPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksPatchPathParams };
var AnalyticsManagementProfileFilterLinksPatchQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksPatchQueryParams, _super);
    function AnalyticsManagementProfileFilterLinksPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementProfileFilterLinksPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksPatchQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementProfileFilterLinksPatchQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksPatchQueryParams };
var AnalyticsManagementProfileFilterLinksPatchSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksPatchSecurity, _super);
    function AnalyticsManagementProfileFilterLinksPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementProfileFilterLinksPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementProfileFilterLinksPatchSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementProfileFilterLinksPatchSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksPatchSecurity };
var AnalyticsManagementProfileFilterLinksPatchRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksPatchRequest, _super);
    function AnalyticsManagementProfileFilterLinksPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfileFilterLinksPatchPathParams)
    ], AnalyticsManagementProfileFilterLinksPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfileFilterLinksPatchQueryParams)
    ], AnalyticsManagementProfileFilterLinksPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ProfileFilterLinkInput)
    ], AnalyticsManagementProfileFilterLinksPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfileFilterLinksPatchSecurity)
    ], AnalyticsManagementProfileFilterLinksPatchRequest.prototype, "security", void 0);
    return AnalyticsManagementProfileFilterLinksPatchRequest;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksPatchRequest };
var AnalyticsManagementProfileFilterLinksPatchResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksPatchResponse, _super);
    function AnalyticsManagementProfileFilterLinksPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProfileFilterLink)
    ], AnalyticsManagementProfileFilterLinksPatchResponse.prototype, "profileFilterLink", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementProfileFilterLinksPatchResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementProfileFilterLinksPatchResponse;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksPatchResponse };
