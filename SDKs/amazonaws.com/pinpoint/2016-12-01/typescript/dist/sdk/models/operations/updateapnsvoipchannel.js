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
var UpdateApnsVoipChannelPathParams = /** @class */ (function (_super) {
    __extends(UpdateApnsVoipChannelPathParams, _super);
    function UpdateApnsVoipChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipChannelPathParams.prototype, "applicationId", void 0);
    return UpdateApnsVoipChannelPathParams;
}(SpeakeasyBase));
export { UpdateApnsVoipChannelPathParams };
var UpdateApnsVoipChannelHeaders = /** @class */ (function (_super) {
    __extends(UpdateApnsVoipChannelHeaders, _super);
    function UpdateApnsVoipChannelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipChannelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipChannelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipChannelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipChannelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipChannelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipChannelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipChannelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateApnsVoipChannelHeaders;
}(SpeakeasyBase));
export { UpdateApnsVoipChannelHeaders };
// UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest
/**
 * Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.
**/
var UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest, _super);
    function UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BundleId" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest.prototype, "bundleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Certificate" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest.prototype, "certificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultAuthenticationMethod" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest.prototype, "defaultAuthenticationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrivateKey" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest.prototype, "privateKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TeamId" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest.prototype, "teamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TokenKey" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest.prototype, "tokenKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TokenKeyId" }),
        __metadata("design:type", String)
    ], UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest.prototype, "tokenKeyId", void 0);
    return UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest;
}(SpeakeasyBase));
export { UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest };
var UpdateApnsVoipChannelRequestBody = /** @class */ (function (_super) {
    __extends(UpdateApnsVoipChannelRequestBody, _super);
    function UpdateApnsVoipChannelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=APNSVoipChannelRequest" }),
        __metadata("design:type", UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest)
    ], UpdateApnsVoipChannelRequestBody.prototype, "apnsVoipChannelRequest", void 0);
    return UpdateApnsVoipChannelRequestBody;
}(SpeakeasyBase));
export { UpdateApnsVoipChannelRequestBody };
var UpdateApnsVoipChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateApnsVoipChannelRequest, _super);
    function UpdateApnsVoipChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateApnsVoipChannelPathParams)
    ], UpdateApnsVoipChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateApnsVoipChannelHeaders)
    ], UpdateApnsVoipChannelRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateApnsVoipChannelRequestBody)
    ], UpdateApnsVoipChannelRequest.prototype, "request", void 0);
    return UpdateApnsVoipChannelRequest;
}(SpeakeasyBase));
export { UpdateApnsVoipChannelRequest };
var UpdateApnsVoipChannelResponse = /** @class */ (function (_super) {
    __extends(UpdateApnsVoipChannelResponse, _super);
    function UpdateApnsVoipChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApnsVoipChannelResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateApnsVoipChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApnsVoipChannelResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApnsVoipChannelResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApnsVoipChannelResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApnsVoipChannelResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApnsVoipChannelResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateApnsVoipChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApnsVoipChannelResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateApnsVoipChannelResponse)
    ], UpdateApnsVoipChannelResponse.prototype, "updateApnsVoipChannelResponse", void 0);
    return UpdateApnsVoipChannelResponse;
}(SpeakeasyBase));
export { UpdateApnsVoipChannelResponse };
