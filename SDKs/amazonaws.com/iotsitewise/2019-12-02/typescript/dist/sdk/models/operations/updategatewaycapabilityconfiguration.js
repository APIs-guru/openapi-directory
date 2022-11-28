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
var UpdateGatewayCapabilityConfigurationPathParams = /** @class */ (function (_super) {
    __extends(UpdateGatewayCapabilityConfigurationPathParams, _super);
    function UpdateGatewayCapabilityConfigurationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=gatewayId" }),
        __metadata("design:type", String)
    ], UpdateGatewayCapabilityConfigurationPathParams.prototype, "gatewayId", void 0);
    return UpdateGatewayCapabilityConfigurationPathParams;
}(SpeakeasyBase));
export { UpdateGatewayCapabilityConfigurationPathParams };
var UpdateGatewayCapabilityConfigurationHeaders = /** @class */ (function (_super) {
    __extends(UpdateGatewayCapabilityConfigurationHeaders, _super);
    function UpdateGatewayCapabilityConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateGatewayCapabilityConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateGatewayCapabilityConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateGatewayCapabilityConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateGatewayCapabilityConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateGatewayCapabilityConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateGatewayCapabilityConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateGatewayCapabilityConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateGatewayCapabilityConfigurationHeaders;
}(SpeakeasyBase));
export { UpdateGatewayCapabilityConfigurationHeaders };
var UpdateGatewayCapabilityConfigurationRequestBody = /** @class */ (function (_super) {
    __extends(UpdateGatewayCapabilityConfigurationRequestBody, _super);
    function UpdateGatewayCapabilityConfigurationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capabilityConfiguration" }),
        __metadata("design:type", String)
    ], UpdateGatewayCapabilityConfigurationRequestBody.prototype, "capabilityConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capabilityNamespace" }),
        __metadata("design:type", String)
    ], UpdateGatewayCapabilityConfigurationRequestBody.prototype, "capabilityNamespace", void 0);
    return UpdateGatewayCapabilityConfigurationRequestBody;
}(SpeakeasyBase));
export { UpdateGatewayCapabilityConfigurationRequestBody };
var UpdateGatewayCapabilityConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateGatewayCapabilityConfigurationRequest, _super);
    function UpdateGatewayCapabilityConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGatewayCapabilityConfigurationPathParams)
    ], UpdateGatewayCapabilityConfigurationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGatewayCapabilityConfigurationHeaders)
    ], UpdateGatewayCapabilityConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateGatewayCapabilityConfigurationRequestBody)
    ], UpdateGatewayCapabilityConfigurationRequest.prototype, "request", void 0);
    return UpdateGatewayCapabilityConfigurationRequest;
}(SpeakeasyBase));
export { UpdateGatewayCapabilityConfigurationRequest };
var UpdateGatewayCapabilityConfigurationResponse = /** @class */ (function (_super) {
    __extends(UpdateGatewayCapabilityConfigurationResponse, _super);
    function UpdateGatewayCapabilityConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateGatewayCapabilityConfigurationResponse.prototype, "conflictingOperationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateGatewayCapabilityConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateGatewayCapabilityConfigurationResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateGatewayCapabilityConfigurationResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateGatewayCapabilityConfigurationResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateGatewayCapabilityConfigurationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateGatewayCapabilityConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateGatewayCapabilityConfigurationResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateGatewayCapabilityConfigurationResponse)
    ], UpdateGatewayCapabilityConfigurationResponse.prototype, "updateGatewayCapabilityConfigurationResponse", void 0);
    return UpdateGatewayCapabilityConfigurationResponse;
}(SpeakeasyBase));
export { UpdateGatewayCapabilityConfigurationResponse };
