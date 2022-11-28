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
var BaremetalsolutionProjectsLocationsProvisioningConfigsCreatePathParams = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsProvisioningConfigsCreatePathParams, _super);
    function BaremetalsolutionProjectsLocationsProvisioningConfigsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsProvisioningConfigsCreatePathParams.prototype, "parent", void 0);
    return BaremetalsolutionProjectsLocationsProvisioningConfigsCreatePathParams;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsProvisioningConfigsCreatePathParams };
var BaremetalsolutionProjectsLocationsProvisioningConfigsCreateQueryParams = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsProvisioningConfigsCreateQueryParams, _super);
    function BaremetalsolutionProjectsLocationsProvisioningConfigsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsProvisioningConfigsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsProvisioningConfigsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsProvisioningConfigsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsProvisioningConfigsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsProvisioningConfigsCreateQueryParams.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsProvisioningConfigsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsProvisioningConfigsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsProvisioningConfigsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BaremetalsolutionProjectsLocationsProvisioningConfigsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsProvisioningConfigsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsProvisioningConfigsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsProvisioningConfigsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return BaremetalsolutionProjectsLocationsProvisioningConfigsCreateQueryParams;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsProvisioningConfigsCreateQueryParams };
var BaremetalsolutionProjectsLocationsProvisioningConfigsCreateSecurity = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsProvisioningConfigsCreateSecurity, _super);
    function BaremetalsolutionProjectsLocationsProvisioningConfigsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BaremetalsolutionProjectsLocationsProvisioningConfigsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BaremetalsolutionProjectsLocationsProvisioningConfigsCreateSecurity.prototype, "oauth2c", void 0);
    return BaremetalsolutionProjectsLocationsProvisioningConfigsCreateSecurity;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsProvisioningConfigsCreateSecurity };
var BaremetalsolutionProjectsLocationsProvisioningConfigsCreateRequest = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsProvisioningConfigsCreateRequest, _super);
    function BaremetalsolutionProjectsLocationsProvisioningConfigsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsProvisioningConfigsCreatePathParams)
    ], BaremetalsolutionProjectsLocationsProvisioningConfigsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsProvisioningConfigsCreateQueryParams)
    ], BaremetalsolutionProjectsLocationsProvisioningConfigsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ProvisioningConfigInput)
    ], BaremetalsolutionProjectsLocationsProvisioningConfigsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsProvisioningConfigsCreateSecurity)
    ], BaremetalsolutionProjectsLocationsProvisioningConfigsCreateRequest.prototype, "security", void 0);
    return BaremetalsolutionProjectsLocationsProvisioningConfigsCreateRequest;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsProvisioningConfigsCreateRequest };
var BaremetalsolutionProjectsLocationsProvisioningConfigsCreateResponse = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsProvisioningConfigsCreateResponse, _super);
    function BaremetalsolutionProjectsLocationsProvisioningConfigsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsProvisioningConfigsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProvisioningConfig)
    ], BaremetalsolutionProjectsLocationsProvisioningConfigsCreateResponse.prototype, "provisioningConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BaremetalsolutionProjectsLocationsProvisioningConfigsCreateResponse.prototype, "statusCode", void 0);
    return BaremetalsolutionProjectsLocationsProvisioningConfigsCreateResponse;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsProvisioningConfigsCreateResponse };
