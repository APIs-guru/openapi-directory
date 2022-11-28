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
var UpdateBaiduChannelPathParams = /** @class */ (function (_super) {
    __extends(UpdateBaiduChannelPathParams, _super);
    function UpdateBaiduChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], UpdateBaiduChannelPathParams.prototype, "applicationId", void 0);
    return UpdateBaiduChannelPathParams;
}(SpeakeasyBase));
export { UpdateBaiduChannelPathParams };
var UpdateBaiduChannelHeaders = /** @class */ (function (_super) {
    __extends(UpdateBaiduChannelHeaders, _super);
    function UpdateBaiduChannelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateBaiduChannelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateBaiduChannelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateBaiduChannelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateBaiduChannelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateBaiduChannelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateBaiduChannelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateBaiduChannelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateBaiduChannelHeaders;
}(SpeakeasyBase));
export { UpdateBaiduChannelHeaders };
// UpdateBaiduChannelRequestBodyBaiduChannelRequest
/**
 * Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
**/
var UpdateBaiduChannelRequestBodyBaiduChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateBaiduChannelRequestBodyBaiduChannelRequest, _super);
    function UpdateBaiduChannelRequestBodyBaiduChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApiKey" }),
        __metadata("design:type", String)
    ], UpdateBaiduChannelRequestBodyBaiduChannelRequest.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateBaiduChannelRequestBodyBaiduChannelRequest.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecretKey" }),
        __metadata("design:type", String)
    ], UpdateBaiduChannelRequestBodyBaiduChannelRequest.prototype, "secretKey", void 0);
    return UpdateBaiduChannelRequestBodyBaiduChannelRequest;
}(SpeakeasyBase));
export { UpdateBaiduChannelRequestBodyBaiduChannelRequest };
var UpdateBaiduChannelRequestBody = /** @class */ (function (_super) {
    __extends(UpdateBaiduChannelRequestBody, _super);
    function UpdateBaiduChannelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BaiduChannelRequest" }),
        __metadata("design:type", UpdateBaiduChannelRequestBodyBaiduChannelRequest)
    ], UpdateBaiduChannelRequestBody.prototype, "baiduChannelRequest", void 0);
    return UpdateBaiduChannelRequestBody;
}(SpeakeasyBase));
export { UpdateBaiduChannelRequestBody };
var UpdateBaiduChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateBaiduChannelRequest, _super);
    function UpdateBaiduChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateBaiduChannelPathParams)
    ], UpdateBaiduChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateBaiduChannelHeaders)
    ], UpdateBaiduChannelRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateBaiduChannelRequestBody)
    ], UpdateBaiduChannelRequest.prototype, "request", void 0);
    return UpdateBaiduChannelRequest;
}(SpeakeasyBase));
export { UpdateBaiduChannelRequest };
var UpdateBaiduChannelResponse = /** @class */ (function (_super) {
    __extends(UpdateBaiduChannelResponse, _super);
    function UpdateBaiduChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateBaiduChannelResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateBaiduChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateBaiduChannelResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateBaiduChannelResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateBaiduChannelResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateBaiduChannelResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateBaiduChannelResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateBaiduChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateBaiduChannelResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateBaiduChannelResponse)
    ], UpdateBaiduChannelResponse.prototype, "updateBaiduChannelResponse", void 0);
    return UpdateBaiduChannelResponse;
}(SpeakeasyBase));
export { UpdateBaiduChannelResponse };
