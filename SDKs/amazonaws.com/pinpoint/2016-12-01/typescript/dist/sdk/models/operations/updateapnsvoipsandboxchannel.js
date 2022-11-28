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
var UpdateApnsVoipSandboxChannelPathParams = /** @class */ (function (_super) {
    __extends(UpdateApnsVoipSandboxChannelPathParams, _super);
    function UpdateApnsVoipSandboxChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipSandboxChannelPathParams.prototype, "applicationId", void 0);
    return UpdateApnsVoipSandboxChannelPathParams;
}(SpeakeasyBase));
export { UpdateApnsVoipSandboxChannelPathParams };
var UpdateApnsVoipSandboxChannelHeaders = /** @class */ (function (_super) {
    __extends(UpdateApnsVoipSandboxChannelHeaders, _super);
    function UpdateApnsVoipSandboxChannelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipSandboxChannelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipSandboxChannelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipSandboxChannelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipSandboxChannelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipSandboxChannelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipSandboxChannelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipSandboxChannelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateApnsVoipSandboxChannelHeaders;
}(SpeakeasyBase));
export { UpdateApnsVoipSandboxChannelHeaders };
// UpdateApnsVoipSandboxChannelRequestBodyApnsVoipSandboxChannelRequest
/**
 * Specifies the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.
**/
var UpdateApnsVoipSandboxChannelRequestBodyApnsVoipSandboxChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateApnsVoipSandboxChannelRequestBodyApnsVoipSandboxChannelRequest, _super);
    function UpdateApnsVoipSandboxChannelRequestBodyApnsVoipSandboxChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BundleId" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipSandboxChannelRequestBodyApnsVoipSandboxChannelRequest.prototype, "bundleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Certificate" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipSandboxChannelRequestBodyApnsVoipSandboxChannelRequest.prototype, "certificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultAuthenticationMethod" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipSandboxChannelRequestBodyApnsVoipSandboxChannelRequest.prototype, "defaultAuthenticationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateApnsVoipSandboxChannelRequestBodyApnsVoipSandboxChannelRequest.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrivateKey" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipSandboxChannelRequestBodyApnsVoipSandboxChannelRequest.prototype, "privateKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TeamId" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipSandboxChannelRequestBodyApnsVoipSandboxChannelRequest.prototype, "teamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TokenKey" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipSandboxChannelRequestBodyApnsVoipSandboxChannelRequest.prototype, "tokenKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TokenKeyId" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipSandboxChannelRequestBodyApnsVoipSandboxChannelRequest.prototype, "tokenKeyId", void 0);
    return UpdateApnsVoipSandboxChannelRequestBodyApnsVoipSandboxChannelRequest;
}(SpeakeasyBase));
export { UpdateApnsVoipSandboxChannelRequestBodyApnsVoipSandboxChannelRequest };
var UpdateApnsVoipSandboxChannelRequestBody = /** @class */ (function (_super) {
    __extends(UpdateApnsVoipSandboxChannelRequestBody, _super);
    function UpdateApnsVoipSandboxChannelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=APNSVoipSandboxChannelRequest" }),
        __metadata("design:type", UpdateApnsVoipSandboxChannelRequestBodyApnsVoipSandboxChannelRequest)
    ], UpdateApnsVoipSandboxChannelRequestBody.prototype, "apnsVoipSandboxChannelRequest", void 0);
    return UpdateApnsVoipSandboxChannelRequestBody;
}(SpeakeasyBase));
export { UpdateApnsVoipSandboxChannelRequestBody };
var UpdateApnsVoipSandboxChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateApnsVoipSandboxChannelRequest, _super);
    function UpdateApnsVoipSandboxChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateApnsVoipSandboxChannelPathParams)
    ], UpdateApnsVoipSandboxChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateApnsVoipSandboxChannelHeaders)
    ], UpdateApnsVoipSandboxChannelRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateApnsVoipSandboxChannelRequestBody)
    ], UpdateApnsVoipSandboxChannelRequest.prototype, "request", void 0);
    return UpdateApnsVoipSandboxChannelRequest;
}(SpeakeasyBase));
export { UpdateApnsVoipSandboxChannelRequest };
var UpdateApnsVoipSandboxChannelResponse = /** @class */ (function (_super) {
    __extends(UpdateApnsVoipSandboxChannelResponse, _super);
    function UpdateApnsVoipSandboxChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApnsVoipSandboxChannelResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateApnsVoipSandboxChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApnsVoipSandboxChannelResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApnsVoipSandboxChannelResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApnsVoipSandboxChannelResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApnsVoipSandboxChannelResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApnsVoipSandboxChannelResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateApnsVoipSandboxChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApnsVoipSandboxChannelResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateApnsVoipSandboxChannelResponse)
    ], UpdateApnsVoipSandboxChannelResponse.prototype, "updateApnsVoipSandboxChannelResponse", void 0);
    return UpdateApnsVoipSandboxChannelResponse;
}(SpeakeasyBase));
export { UpdateApnsVoipSandboxChannelResponse };
