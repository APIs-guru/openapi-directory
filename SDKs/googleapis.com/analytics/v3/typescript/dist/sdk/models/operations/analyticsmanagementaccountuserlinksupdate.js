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
var AnalyticsManagementAccountUserLinksUpdatePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountUserLinksUpdatePathParams, _super);
    function AnalyticsManagementAccountUserLinksUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountUserLinksUpdatePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linkId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountUserLinksUpdatePathParams.prototype, "linkId", void 0);
    return AnalyticsManagementAccountUserLinksUpdatePathParams;
}(SpeakeasyBase));
export { AnalyticsManagementAccountUserLinksUpdatePathParams };
var AnalyticsManagementAccountUserLinksUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountUserLinksUpdateQueryParams, _super);
    function AnalyticsManagementAccountUserLinksUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountUserLinksUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountUserLinksUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountUserLinksUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountUserLinksUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementAccountUserLinksUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountUserLinksUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountUserLinksUpdateQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementAccountUserLinksUpdateQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementAccountUserLinksUpdateQueryParams };
var AnalyticsManagementAccountUserLinksUpdateSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountUserLinksUpdateSecurity, _super);
    function AnalyticsManagementAccountUserLinksUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementAccountUserLinksUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementAccountUserLinksUpdateSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementAccountUserLinksUpdateSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementAccountUserLinksUpdateSecurity };
var AnalyticsManagementAccountUserLinksUpdateRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountUserLinksUpdateRequest, _super);
    function AnalyticsManagementAccountUserLinksUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementAccountUserLinksUpdatePathParams)
    ], AnalyticsManagementAccountUserLinksUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementAccountUserLinksUpdateQueryParams)
    ], AnalyticsManagementAccountUserLinksUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.EntityUserLinkInput)
    ], AnalyticsManagementAccountUserLinksUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementAccountUserLinksUpdateSecurity)
    ], AnalyticsManagementAccountUserLinksUpdateRequest.prototype, "security", void 0);
    return AnalyticsManagementAccountUserLinksUpdateRequest;
}(SpeakeasyBase));
export { AnalyticsManagementAccountUserLinksUpdateRequest };
var AnalyticsManagementAccountUserLinksUpdateResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountUserLinksUpdateResponse, _super);
    function AnalyticsManagementAccountUserLinksUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountUserLinksUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EntityUserLink)
    ], AnalyticsManagementAccountUserLinksUpdateResponse.prototype, "entityUserLink", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementAccountUserLinksUpdateResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementAccountUserLinksUpdateResponse;
}(SpeakeasyBase));
export { AnalyticsManagementAccountUserLinksUpdateResponse };
