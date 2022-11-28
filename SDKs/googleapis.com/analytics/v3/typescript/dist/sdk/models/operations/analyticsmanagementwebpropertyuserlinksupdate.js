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
var AnalyticsManagementWebpropertyUserLinksUpdatePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertyUserLinksUpdatePathParams, _super);
    function AnalyticsManagementWebpropertyUserLinksUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertyUserLinksUpdatePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linkId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertyUserLinksUpdatePathParams.prototype, "linkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertyUserLinksUpdatePathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementWebpropertyUserLinksUpdatePathParams;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertyUserLinksUpdatePathParams };
var AnalyticsManagementWebpropertyUserLinksUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertyUserLinksUpdateQueryParams, _super);
    function AnalyticsManagementWebpropertyUserLinksUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertyUserLinksUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertyUserLinksUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertyUserLinksUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertyUserLinksUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementWebpropertyUserLinksUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertyUserLinksUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertyUserLinksUpdateQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementWebpropertyUserLinksUpdateQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertyUserLinksUpdateQueryParams };
var AnalyticsManagementWebpropertyUserLinksUpdateSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertyUserLinksUpdateSecurity, _super);
    function AnalyticsManagementWebpropertyUserLinksUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementWebpropertyUserLinksUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementWebpropertyUserLinksUpdateSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementWebpropertyUserLinksUpdateSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertyUserLinksUpdateSecurity };
var AnalyticsManagementWebpropertyUserLinksUpdateRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertyUserLinksUpdateRequest, _super);
    function AnalyticsManagementWebpropertyUserLinksUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebpropertyUserLinksUpdatePathParams)
    ], AnalyticsManagementWebpropertyUserLinksUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebpropertyUserLinksUpdateQueryParams)
    ], AnalyticsManagementWebpropertyUserLinksUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.EntityUserLinkInput)
    ], AnalyticsManagementWebpropertyUserLinksUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebpropertyUserLinksUpdateSecurity)
    ], AnalyticsManagementWebpropertyUserLinksUpdateRequest.prototype, "security", void 0);
    return AnalyticsManagementWebpropertyUserLinksUpdateRequest;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertyUserLinksUpdateRequest };
var AnalyticsManagementWebpropertyUserLinksUpdateResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertyUserLinksUpdateResponse, _super);
    function AnalyticsManagementWebpropertyUserLinksUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertyUserLinksUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EntityUserLink)
    ], AnalyticsManagementWebpropertyUserLinksUpdateResponse.prototype, "entityUserLink", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementWebpropertyUserLinksUpdateResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementWebpropertyUserLinksUpdateResponse;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertyUserLinksUpdateResponse };
