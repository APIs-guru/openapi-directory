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
var AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreatePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreatePathParams, _super);
    function AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreatePathParams.prototype, "parent", void 0);
    return AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreatePathParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreatePathParams };
var AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateQueryParams, _super);
    function AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateQueryParams };
var AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateSecurity, _super);
    function AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateSecurity.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateSecurity;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateSecurity };
var AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest, _super);
    function AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreatePathParams)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateQueryParams)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaMeasurementProtocolSecretInput)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateSecurity)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest };
var AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse, _super);
    function AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse.prototype, "googleAnalyticsAdminV1alphaMeasurementProtocolSecret", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse };
