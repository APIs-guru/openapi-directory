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
var UpdateSmsChannelPathParams = /** @class */ (function (_super) {
    __extends(UpdateSmsChannelPathParams, _super);
    function UpdateSmsChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], UpdateSmsChannelPathParams.prototype, "applicationId", void 0);
    return UpdateSmsChannelPathParams;
}(SpeakeasyBase));
export { UpdateSmsChannelPathParams };
var UpdateSmsChannelHeaders = /** @class */ (function (_super) {
    __extends(UpdateSmsChannelHeaders, _super);
    function UpdateSmsChannelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateSmsChannelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateSmsChannelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateSmsChannelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateSmsChannelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateSmsChannelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateSmsChannelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateSmsChannelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateSmsChannelHeaders;
}(SpeakeasyBase));
export { UpdateSmsChannelHeaders };
// UpdateSmsChannelRequestBodySmsChannelRequest
/**
 * Specifies the status and settings of the SMS channel for an application.
**/
var UpdateSmsChannelRequestBodySmsChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateSmsChannelRequestBodySmsChannelRequest, _super);
    function UpdateSmsChannelRequestBodySmsChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateSmsChannelRequestBodySmsChannelRequest.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SenderId" }),
        __metadata("design:type", String)
    ], UpdateSmsChannelRequestBodySmsChannelRequest.prototype, "senderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShortCode" }),
        __metadata("design:type", String)
    ], UpdateSmsChannelRequestBodySmsChannelRequest.prototype, "shortCode", void 0);
    return UpdateSmsChannelRequestBodySmsChannelRequest;
}(SpeakeasyBase));
export { UpdateSmsChannelRequestBodySmsChannelRequest };
var UpdateSmsChannelRequestBody = /** @class */ (function (_super) {
    __extends(UpdateSmsChannelRequestBody, _super);
    function UpdateSmsChannelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SMSChannelRequest" }),
        __metadata("design:type", UpdateSmsChannelRequestBodySmsChannelRequest)
    ], UpdateSmsChannelRequestBody.prototype, "smsChannelRequest", void 0);
    return UpdateSmsChannelRequestBody;
}(SpeakeasyBase));
export { UpdateSmsChannelRequestBody };
var UpdateSmsChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateSmsChannelRequest, _super);
    function UpdateSmsChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSmsChannelPathParams)
    ], UpdateSmsChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSmsChannelHeaders)
    ], UpdateSmsChannelRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateSmsChannelRequestBody)
    ], UpdateSmsChannelRequest.prototype, "request", void 0);
    return UpdateSmsChannelRequest;
}(SpeakeasyBase));
export { UpdateSmsChannelRequest };
var UpdateSmsChannelResponse = /** @class */ (function (_super) {
    __extends(UpdateSmsChannelResponse, _super);
    function UpdateSmsChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSmsChannelResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSmsChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSmsChannelResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSmsChannelResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSmsChannelResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSmsChannelResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSmsChannelResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSmsChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSmsChannelResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateSmsChannelResponse)
    ], UpdateSmsChannelResponse.prototype, "updateSmsChannelResponse", void 0);
    return UpdateSmsChannelResponse;
}(SpeakeasyBase));
export { UpdateSmsChannelResponse };
