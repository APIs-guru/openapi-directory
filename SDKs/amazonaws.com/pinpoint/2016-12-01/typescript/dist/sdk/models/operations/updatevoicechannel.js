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
var UpdateVoiceChannelPathParams = /** @class */ (function (_super) {
    __extends(UpdateVoiceChannelPathParams, _super);
    function UpdateVoiceChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], UpdateVoiceChannelPathParams.prototype, "applicationId", void 0);
    return UpdateVoiceChannelPathParams;
}(SpeakeasyBase));
export { UpdateVoiceChannelPathParams };
var UpdateVoiceChannelHeaders = /** @class */ (function (_super) {
    __extends(UpdateVoiceChannelHeaders, _super);
    function UpdateVoiceChannelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateVoiceChannelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateVoiceChannelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateVoiceChannelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateVoiceChannelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateVoiceChannelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateVoiceChannelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateVoiceChannelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateVoiceChannelHeaders;
}(SpeakeasyBase));
export { UpdateVoiceChannelHeaders };
// UpdateVoiceChannelRequestBodyVoiceChannelRequest
/**
 * Specifies the status and settings of the voice channel for an application.
**/
var UpdateVoiceChannelRequestBodyVoiceChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateVoiceChannelRequestBodyVoiceChannelRequest, _super);
    function UpdateVoiceChannelRequestBodyVoiceChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateVoiceChannelRequestBodyVoiceChannelRequest.prototype, "enabled", void 0);
    return UpdateVoiceChannelRequestBodyVoiceChannelRequest;
}(SpeakeasyBase));
export { UpdateVoiceChannelRequestBodyVoiceChannelRequest };
var UpdateVoiceChannelRequestBody = /** @class */ (function (_super) {
    __extends(UpdateVoiceChannelRequestBody, _super);
    function UpdateVoiceChannelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VoiceChannelRequest" }),
        __metadata("design:type", UpdateVoiceChannelRequestBodyVoiceChannelRequest)
    ], UpdateVoiceChannelRequestBody.prototype, "voiceChannelRequest", void 0);
    return UpdateVoiceChannelRequestBody;
}(SpeakeasyBase));
export { UpdateVoiceChannelRequestBody };
var UpdateVoiceChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateVoiceChannelRequest, _super);
    function UpdateVoiceChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateVoiceChannelPathParams)
    ], UpdateVoiceChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateVoiceChannelHeaders)
    ], UpdateVoiceChannelRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateVoiceChannelRequestBody)
    ], UpdateVoiceChannelRequest.prototype, "request", void 0);
    return UpdateVoiceChannelRequest;
}(SpeakeasyBase));
export { UpdateVoiceChannelRequest };
var UpdateVoiceChannelResponse = /** @class */ (function (_super) {
    __extends(UpdateVoiceChannelResponse, _super);
    function UpdateVoiceChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVoiceChannelResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateVoiceChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVoiceChannelResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVoiceChannelResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVoiceChannelResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVoiceChannelResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVoiceChannelResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateVoiceChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVoiceChannelResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateVoiceChannelResponse)
    ], UpdateVoiceChannelResponse.prototype, "updateVoiceChannelResponse", void 0);
    return UpdateVoiceChannelResponse;
}(SpeakeasyBase));
export { UpdateVoiceChannelResponse };
