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
var UpdateOpenIdIdpConfigPathParams = /** @class */ (function (_super) {
    __extends(UpdateOpenIdIdpConfigPathParams, _super);
    function UpdateOpenIdIdpConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=idp_id" }),
        __metadata("design:type", Number)
    ], UpdateOpenIdIdpConfigPathParams.prototype, "idpId", void 0);
    return UpdateOpenIdIdpConfigPathParams;
}(SpeakeasyBase));
export { UpdateOpenIdIdpConfigPathParams };
var UpdateOpenIdIdpConfigHeaders = /** @class */ (function (_super) {
    __extends(UpdateOpenIdIdpConfigHeaders, _super);
    function UpdateOpenIdIdpConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], UpdateOpenIdIdpConfigHeaders.prototype, "xSdsAuthToken", void 0);
    return UpdateOpenIdIdpConfigHeaders;
}(SpeakeasyBase));
export { UpdateOpenIdIdpConfigHeaders };
var UpdateOpenIdIdpConfigRequest = /** @class */ (function (_super) {
    __extends(UpdateOpenIdIdpConfigRequest, _super);
    function UpdateOpenIdIdpConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateOpenIdIdpConfigPathParams)
    ], UpdateOpenIdIdpConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateOpenIdIdpConfigHeaders)
    ], UpdateOpenIdIdpConfigRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateOpenIdIdpConfigRequest)
    ], UpdateOpenIdIdpConfigRequest.prototype, "request", void 0);
    return UpdateOpenIdIdpConfigRequest;
}(SpeakeasyBase));
export { UpdateOpenIdIdpConfigRequest };
var UpdateOpenIdIdpConfigResponse = /** @class */ (function (_super) {
    __extends(UpdateOpenIdIdpConfigResponse, _super);
    function UpdateOpenIdIdpConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateOpenIdIdpConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], UpdateOpenIdIdpConfigResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OpenIdIdpConfig)
    ], UpdateOpenIdIdpConfigResponse.prototype, "openIdIdpConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateOpenIdIdpConfigResponse.prototype, "statusCode", void 0);
    return UpdateOpenIdIdpConfigResponse;
}(SpeakeasyBase));
export { UpdateOpenIdIdpConfigResponse };
