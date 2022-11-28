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
var AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListPathParams, _super);
    function AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListPathParams.prototype, "parent", void 0);
    return AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListPathParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListPathParams };
var AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListQueryParams, _super);
    function AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListQueryParams };
var AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption1, _super);
    function AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption1 };
var AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption2, _super);
    function AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption2 };
var AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurity, _super);
    function AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption1)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption2)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurity.prototype, "option2", void 0);
    return AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurity;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurity };
var AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest, _super);
    function AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListPathParams)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListQueryParams)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurity)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest };
var AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse, _super);
    function AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse.prototype, "googleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse };
