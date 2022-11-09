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
var UpdateGatewayPathParams = /** @class */ (function (_super) {
    __extends(UpdateGatewayPathParams, _super);
    function UpdateGatewayPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=gatewayId" }),
        __metadata("design:type", String)
    ], UpdateGatewayPathParams.prototype, "gatewayId", void 0);
    return UpdateGatewayPathParams;
}(SpeakeasyBase));
export { UpdateGatewayPathParams };
var UpdateGatewayHeaders = /** @class */ (function (_super) {
    __extends(UpdateGatewayHeaders, _super);
    function UpdateGatewayHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateGatewayHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateGatewayHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateGatewayHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateGatewayHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateGatewayHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateGatewayHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateGatewayHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateGatewayHeaders;
}(SpeakeasyBase));
export { UpdateGatewayHeaders };
var UpdateGatewayRequestBody = /** @class */ (function (_super) {
    __extends(UpdateGatewayRequestBody, _super);
    function UpdateGatewayRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=gatewayName" }),
        __metadata("design:type", String)
    ], UpdateGatewayRequestBody.prototype, "gatewayName", void 0);
    return UpdateGatewayRequestBody;
}(SpeakeasyBase));
export { UpdateGatewayRequestBody };
var UpdateGatewayRequest = /** @class */ (function (_super) {
    __extends(UpdateGatewayRequest, _super);
    function UpdateGatewayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateGatewayPathParams)
    ], UpdateGatewayRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateGatewayHeaders)
    ], UpdateGatewayRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateGatewayRequestBody)
    ], UpdateGatewayRequest.prototype, "request", void 0);
    return UpdateGatewayRequest;
}(SpeakeasyBase));
export { UpdateGatewayRequest };
var UpdateGatewayResponse = /** @class */ (function (_super) {
    __extends(UpdateGatewayResponse, _super);
    function UpdateGatewayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateGatewayResponse.prototype, "conflictingOperationException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateGatewayResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateGatewayResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateGatewayResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateGatewayResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateGatewayResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateGatewayResponse.prototype, "throttlingException", void 0);
    return UpdateGatewayResponse;
}(SpeakeasyBase));
export { UpdateGatewayResponse };
