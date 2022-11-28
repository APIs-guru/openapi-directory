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
var AnalyticsadminPropertiesConversionEventsCreatePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesConversionEventsCreatePathParams, _super);
    function AnalyticsadminPropertiesConversionEventsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesConversionEventsCreatePathParams.prototype, "parent", void 0);
    return AnalyticsadminPropertiesConversionEventsCreatePathParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesConversionEventsCreatePathParams };
var AnalyticsadminPropertiesConversionEventsCreateQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesConversionEventsCreateQueryParams, _super);
    function AnalyticsadminPropertiesConversionEventsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesConversionEventsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesConversionEventsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesConversionEventsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesConversionEventsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesConversionEventsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesConversionEventsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesConversionEventsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesConversionEventsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesConversionEventsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesConversionEventsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesConversionEventsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesConversionEventsCreateQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesConversionEventsCreateQueryParams };
var AnalyticsadminPropertiesConversionEventsCreateSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesConversionEventsCreateSecurity, _super);
    function AnalyticsadminPropertiesConversionEventsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesConversionEventsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesConversionEventsCreateSecurity.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesConversionEventsCreateSecurity;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesConversionEventsCreateSecurity };
var AnalyticsadminPropertiesConversionEventsCreateRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesConversionEventsCreateRequest, _super);
    function AnalyticsadminPropertiesConversionEventsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesConversionEventsCreatePathParams)
    ], AnalyticsadminPropertiesConversionEventsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesConversionEventsCreateQueryParams)
    ], AnalyticsadminPropertiesConversionEventsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaConversionEventInput)
    ], AnalyticsadminPropertiesConversionEventsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesConversionEventsCreateSecurity)
    ], AnalyticsadminPropertiesConversionEventsCreateRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesConversionEventsCreateRequest;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesConversionEventsCreateRequest };
var AnalyticsadminPropertiesConversionEventsCreateResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesConversionEventsCreateResponse, _super);
    function AnalyticsadminPropertiesConversionEventsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesConversionEventsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaConversionEvent)
    ], AnalyticsadminPropertiesConversionEventsCreateResponse.prototype, "googleAnalyticsAdminV1alphaConversionEvent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesConversionEventsCreateResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesConversionEventsCreateResponse;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesConversionEventsCreateResponse };
