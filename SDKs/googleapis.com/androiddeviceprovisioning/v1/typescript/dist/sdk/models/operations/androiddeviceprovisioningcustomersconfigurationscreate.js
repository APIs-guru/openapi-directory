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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var AndroiddeviceprovisioningCustomersConfigurationsCreatePathParams = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningCustomersConfigurationsCreatePathParams, _super);
    function AndroiddeviceprovisioningCustomersConfigurationsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsCreatePathParams.prototype, "parent", void 0);
    return AndroiddeviceprovisioningCustomersConfigurationsCreatePathParams;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningCustomersConfigurationsCreatePathParams };
var AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams, _super);
    function AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams };
var AndroiddeviceprovisioningCustomersConfigurationsCreateRequest = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningCustomersConfigurationsCreateRequest, _super);
    function AndroiddeviceprovisioningCustomersConfigurationsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AndroiddeviceprovisioningCustomersConfigurationsCreatePathParams)
    ], AndroiddeviceprovisioningCustomersConfigurationsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams)
    ], AndroiddeviceprovisioningCustomersConfigurationsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Configuration)
    ], AndroiddeviceprovisioningCustomersConfigurationsCreateRequest.prototype, "request", void 0);
    return AndroiddeviceprovisioningCustomersConfigurationsCreateRequest;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningCustomersConfigurationsCreateRequest };
var AndroiddeviceprovisioningCustomersConfigurationsCreateResponse = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningCustomersConfigurationsCreateResponse, _super);
    function AndroiddeviceprovisioningCustomersConfigurationsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Configuration)
    ], AndroiddeviceprovisioningCustomersConfigurationsCreateResponse.prototype, "configuration", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AndroiddeviceprovisioningCustomersConfigurationsCreateResponse.prototype, "statusCode", void 0);
    return AndroiddeviceprovisioningCustomersConfigurationsCreateResponse;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningCustomersConfigurationsCreateResponse };
