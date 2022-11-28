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
var AnalyticsadminPropertiesCustomDimensionsCreatePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomDimensionsCreatePathParams, _super);
    function AnalyticsadminPropertiesCustomDimensionsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomDimensionsCreatePathParams.prototype, "parent", void 0);
    return AnalyticsadminPropertiesCustomDimensionsCreatePathParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesCustomDimensionsCreatePathParams };
var AnalyticsadminPropertiesCustomDimensionsCreateQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomDimensionsCreateQueryParams, _super);
    function AnalyticsadminPropertiesCustomDimensionsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomDimensionsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomDimensionsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomDimensionsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomDimensionsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomDimensionsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomDimensionsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomDimensionsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesCustomDimensionsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomDimensionsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomDimensionsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomDimensionsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesCustomDimensionsCreateQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesCustomDimensionsCreateQueryParams };
var AnalyticsadminPropertiesCustomDimensionsCreateSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomDimensionsCreateSecurity, _super);
    function AnalyticsadminPropertiesCustomDimensionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesCustomDimensionsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesCustomDimensionsCreateSecurity.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesCustomDimensionsCreateSecurity;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesCustomDimensionsCreateSecurity };
var AnalyticsadminPropertiesCustomDimensionsCreateRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomDimensionsCreateRequest, _super);
    function AnalyticsadminPropertiesCustomDimensionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesCustomDimensionsCreatePathParams)
    ], AnalyticsadminPropertiesCustomDimensionsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesCustomDimensionsCreateQueryParams)
    ], AnalyticsadminPropertiesCustomDimensionsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaCustomDimensionInput)
    ], AnalyticsadminPropertiesCustomDimensionsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesCustomDimensionsCreateSecurity)
    ], AnalyticsadminPropertiesCustomDimensionsCreateRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesCustomDimensionsCreateRequest;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesCustomDimensionsCreateRequest };
var AnalyticsadminPropertiesCustomDimensionsCreateResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomDimensionsCreateResponse, _super);
    function AnalyticsadminPropertiesCustomDimensionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomDimensionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaCustomDimension)
    ], AnalyticsadminPropertiesCustomDimensionsCreateResponse.prototype, "googleAnalyticsAdminV1alphaCustomDimension", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesCustomDimensionsCreateResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesCustomDimensionsCreateResponse;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesCustomDimensionsCreateResponse };
