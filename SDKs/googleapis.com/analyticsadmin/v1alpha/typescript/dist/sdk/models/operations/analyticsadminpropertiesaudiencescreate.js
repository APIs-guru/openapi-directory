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
var AnalyticsadminPropertiesAudiencesCreatePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesAudiencesCreatePathParams, _super);
    function AnalyticsadminPropertiesAudiencesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAudiencesCreatePathParams.prototype, "parent", void 0);
    return AnalyticsadminPropertiesAudiencesCreatePathParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesAudiencesCreatePathParams };
var AnalyticsadminPropertiesAudiencesCreateQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesAudiencesCreateQueryParams, _super);
    function AnalyticsadminPropertiesAudiencesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAudiencesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAudiencesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAudiencesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAudiencesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAudiencesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAudiencesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAudiencesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesAudiencesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAudiencesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAudiencesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAudiencesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesAudiencesCreateQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesAudiencesCreateQueryParams };
var AnalyticsadminPropertiesAudiencesCreateSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesAudiencesCreateSecurity, _super);
    function AnalyticsadminPropertiesAudiencesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesAudiencesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesAudiencesCreateSecurity.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesAudiencesCreateSecurity;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesAudiencesCreateSecurity };
var AnalyticsadminPropertiesAudiencesCreateRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesAudiencesCreateRequest, _super);
    function AnalyticsadminPropertiesAudiencesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesAudiencesCreatePathParams)
    ], AnalyticsadminPropertiesAudiencesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesAudiencesCreateQueryParams)
    ], AnalyticsadminPropertiesAudiencesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaAudienceInput)
    ], AnalyticsadminPropertiesAudiencesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesAudiencesCreateSecurity)
    ], AnalyticsadminPropertiesAudiencesCreateRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesAudiencesCreateRequest;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesAudiencesCreateRequest };
var AnalyticsadminPropertiesAudiencesCreateResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesAudiencesCreateResponse, _super);
    function AnalyticsadminPropertiesAudiencesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAudiencesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaAudience)
    ], AnalyticsadminPropertiesAudiencesCreateResponse.prototype, "googleAnalyticsAdminV1alphaAudience", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesAudiencesCreateResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesAudiencesCreateResponse;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesAudiencesCreateResponse };
