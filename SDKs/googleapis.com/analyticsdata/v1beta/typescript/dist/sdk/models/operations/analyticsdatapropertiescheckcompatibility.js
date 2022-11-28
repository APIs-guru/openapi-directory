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
var AnalyticsdataPropertiesCheckCompatibilityPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesCheckCompatibilityPathParams, _super);
    function AnalyticsdataPropertiesCheckCompatibilityPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=property" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesCheckCompatibilityPathParams.prototype, "property", void 0);
    return AnalyticsdataPropertiesCheckCompatibilityPathParams;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesCheckCompatibilityPathParams };
var AnalyticsdataPropertiesCheckCompatibilityQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesCheckCompatibilityQueryParams, _super);
    function AnalyticsdataPropertiesCheckCompatibilityQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesCheckCompatibilityQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesCheckCompatibilityQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesCheckCompatibilityQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesCheckCompatibilityQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesCheckCompatibilityQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesCheckCompatibilityQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesCheckCompatibilityQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsdataPropertiesCheckCompatibilityQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesCheckCompatibilityQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesCheckCompatibilityQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesCheckCompatibilityQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsdataPropertiesCheckCompatibilityQueryParams;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesCheckCompatibilityQueryParams };
var AnalyticsdataPropertiesCheckCompatibilitySecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesCheckCompatibilitySecurityOption1, _super);
    function AnalyticsdataPropertiesCheckCompatibilitySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsdataPropertiesCheckCompatibilitySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsdataPropertiesCheckCompatibilitySecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsdataPropertiesCheckCompatibilitySecurityOption1;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesCheckCompatibilitySecurityOption1 };
var AnalyticsdataPropertiesCheckCompatibilitySecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesCheckCompatibilitySecurityOption2, _super);
    function AnalyticsdataPropertiesCheckCompatibilitySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsdataPropertiesCheckCompatibilitySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsdataPropertiesCheckCompatibilitySecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsdataPropertiesCheckCompatibilitySecurityOption2;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesCheckCompatibilitySecurityOption2 };
var AnalyticsdataPropertiesCheckCompatibilitySecurity = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesCheckCompatibilitySecurity, _super);
    function AnalyticsdataPropertiesCheckCompatibilitySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsdataPropertiesCheckCompatibilitySecurityOption1)
    ], AnalyticsdataPropertiesCheckCompatibilitySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsdataPropertiesCheckCompatibilitySecurityOption2)
    ], AnalyticsdataPropertiesCheckCompatibilitySecurity.prototype, "option2", void 0);
    return AnalyticsdataPropertiesCheckCompatibilitySecurity;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesCheckCompatibilitySecurity };
var AnalyticsdataPropertiesCheckCompatibilityRequest = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesCheckCompatibilityRequest, _super);
    function AnalyticsdataPropertiesCheckCompatibilityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsdataPropertiesCheckCompatibilityPathParams)
    ], AnalyticsdataPropertiesCheckCompatibilityRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsdataPropertiesCheckCompatibilityQueryParams)
    ], AnalyticsdataPropertiesCheckCompatibilityRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CheckCompatibilityRequest)
    ], AnalyticsdataPropertiesCheckCompatibilityRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsdataPropertiesCheckCompatibilitySecurity)
    ], AnalyticsdataPropertiesCheckCompatibilityRequest.prototype, "security", void 0);
    return AnalyticsdataPropertiesCheckCompatibilityRequest;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesCheckCompatibilityRequest };
var AnalyticsdataPropertiesCheckCompatibilityResponse = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesCheckCompatibilityResponse, _super);
    function AnalyticsdataPropertiesCheckCompatibilityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CheckCompatibilityResponse)
    ], AnalyticsdataPropertiesCheckCompatibilityResponse.prototype, "checkCompatibilityResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesCheckCompatibilityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsdataPropertiesCheckCompatibilityResponse.prototype, "statusCode", void 0);
    return AnalyticsdataPropertiesCheckCompatibilityResponse;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesCheckCompatibilityResponse };
