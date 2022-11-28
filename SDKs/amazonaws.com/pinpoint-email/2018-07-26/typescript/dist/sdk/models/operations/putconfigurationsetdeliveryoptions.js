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
var PutConfigurationSetDeliveryOptionsPathParams = /** @class */ (function (_super) {
    __extends(PutConfigurationSetDeliveryOptionsPathParams, _super);
    function PutConfigurationSetDeliveryOptionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConfigurationSetName" }),
        __metadata("design:type", String)
    ], PutConfigurationSetDeliveryOptionsPathParams.prototype, "configurationSetName", void 0);
    return PutConfigurationSetDeliveryOptionsPathParams;
}(SpeakeasyBase));
export { PutConfigurationSetDeliveryOptionsPathParams };
var PutConfigurationSetDeliveryOptionsHeaders = /** @class */ (function (_super) {
    __extends(PutConfigurationSetDeliveryOptionsHeaders, _super);
    function PutConfigurationSetDeliveryOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutConfigurationSetDeliveryOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutConfigurationSetDeliveryOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutConfigurationSetDeliveryOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutConfigurationSetDeliveryOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutConfigurationSetDeliveryOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutConfigurationSetDeliveryOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutConfigurationSetDeliveryOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutConfigurationSetDeliveryOptionsHeaders;
}(SpeakeasyBase));
export { PutConfigurationSetDeliveryOptionsHeaders };
export var PutConfigurationSetDeliveryOptionsRequestBodyTlsPolicyEnum;
(function (PutConfigurationSetDeliveryOptionsRequestBodyTlsPolicyEnum) {
    PutConfigurationSetDeliveryOptionsRequestBodyTlsPolicyEnum["Require"] = "REQUIRE";
    PutConfigurationSetDeliveryOptionsRequestBodyTlsPolicyEnum["Optional"] = "OPTIONAL";
})(PutConfigurationSetDeliveryOptionsRequestBodyTlsPolicyEnum || (PutConfigurationSetDeliveryOptionsRequestBodyTlsPolicyEnum = {}));
var PutConfigurationSetDeliveryOptionsRequestBody = /** @class */ (function (_super) {
    __extends(PutConfigurationSetDeliveryOptionsRequestBody, _super);
    function PutConfigurationSetDeliveryOptionsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SendingPoolName" }),
        __metadata("design:type", String)
    ], PutConfigurationSetDeliveryOptionsRequestBody.prototype, "sendingPoolName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TlsPolicy" }),
        __metadata("design:type", String)
    ], PutConfigurationSetDeliveryOptionsRequestBody.prototype, "tlsPolicy", void 0);
    return PutConfigurationSetDeliveryOptionsRequestBody;
}(SpeakeasyBase));
export { PutConfigurationSetDeliveryOptionsRequestBody };
var PutConfigurationSetDeliveryOptionsRequest = /** @class */ (function (_super) {
    __extends(PutConfigurationSetDeliveryOptionsRequest, _super);
    function PutConfigurationSetDeliveryOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutConfigurationSetDeliveryOptionsPathParams)
    ], PutConfigurationSetDeliveryOptionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutConfigurationSetDeliveryOptionsHeaders)
    ], PutConfigurationSetDeliveryOptionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutConfigurationSetDeliveryOptionsRequestBody)
    ], PutConfigurationSetDeliveryOptionsRequest.prototype, "request", void 0);
    return PutConfigurationSetDeliveryOptionsRequest;
}(SpeakeasyBase));
export { PutConfigurationSetDeliveryOptionsRequest };
var PutConfigurationSetDeliveryOptionsResponse = /** @class */ (function (_super) {
    __extends(PutConfigurationSetDeliveryOptionsResponse, _super);
    function PutConfigurationSetDeliveryOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutConfigurationSetDeliveryOptionsResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutConfigurationSetDeliveryOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutConfigurationSetDeliveryOptionsResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutConfigurationSetDeliveryOptionsResponse.prototype, "putConfigurationSetDeliveryOptionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutConfigurationSetDeliveryOptionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutConfigurationSetDeliveryOptionsResponse.prototype, "tooManyRequestsException", void 0);
    return PutConfigurationSetDeliveryOptionsResponse;
}(SpeakeasyBase));
export { PutConfigurationSetDeliveryOptionsResponse };
