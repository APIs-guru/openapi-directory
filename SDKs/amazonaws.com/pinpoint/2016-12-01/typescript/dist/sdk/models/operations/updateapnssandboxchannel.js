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
var UpdateApnsSandboxChannelPathParams = /** @class */ (function (_super) {
    __extends(UpdateApnsSandboxChannelPathParams, _super);
    function UpdateApnsSandboxChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], UpdateApnsSandboxChannelPathParams.prototype, "applicationId", void 0);
    return UpdateApnsSandboxChannelPathParams;
}(SpeakeasyBase));
export { UpdateApnsSandboxChannelPathParams };
var UpdateApnsSandboxChannelHeaders = /** @class */ (function (_super) {
    __extends(UpdateApnsSandboxChannelHeaders, _super);
    function UpdateApnsSandboxChannelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateApnsSandboxChannelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateApnsSandboxChannelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateApnsSandboxChannelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateApnsSandboxChannelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateApnsSandboxChannelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateApnsSandboxChannelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateApnsSandboxChannelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateApnsSandboxChannelHeaders;
}(SpeakeasyBase));
export { UpdateApnsSandboxChannelHeaders };
// UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest
/**
 * Specifies the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.
**/
var UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest, _super);
    function UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BundleId" }),
        __metadata("design:type", String)
    ], UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest.prototype, "bundleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Certificate" }),
        __metadata("design:type", String)
    ], UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest.prototype, "certificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultAuthenticationMethod" }),
        __metadata("design:type", String)
    ], UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest.prototype, "defaultAuthenticationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrivateKey" }),
        __metadata("design:type", String)
    ], UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest.prototype, "privateKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TeamId" }),
        __metadata("design:type", String)
    ], UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest.prototype, "teamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TokenKey" }),
        __metadata("design:type", String)
    ], UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest.prototype, "tokenKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TokenKeyId" }),
        __metadata("design:type", String)
    ], UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest.prototype, "tokenKeyId", void 0);
    return UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest;
}(SpeakeasyBase));
export { UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest };
var UpdateApnsSandboxChannelRequestBody = /** @class */ (function (_super) {
    __extends(UpdateApnsSandboxChannelRequestBody, _super);
    function UpdateApnsSandboxChannelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=APNSSandboxChannelRequest" }),
        __metadata("design:type", UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest)
    ], UpdateApnsSandboxChannelRequestBody.prototype, "apnsSandboxChannelRequest", void 0);
    return UpdateApnsSandboxChannelRequestBody;
}(SpeakeasyBase));
export { UpdateApnsSandboxChannelRequestBody };
var UpdateApnsSandboxChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateApnsSandboxChannelRequest, _super);
    function UpdateApnsSandboxChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateApnsSandboxChannelPathParams)
    ], UpdateApnsSandboxChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateApnsSandboxChannelHeaders)
    ], UpdateApnsSandboxChannelRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateApnsSandboxChannelRequestBody)
    ], UpdateApnsSandboxChannelRequest.prototype, "request", void 0);
    return UpdateApnsSandboxChannelRequest;
}(SpeakeasyBase));
export { UpdateApnsSandboxChannelRequest };
var UpdateApnsSandboxChannelResponse = /** @class */ (function (_super) {
    __extends(UpdateApnsSandboxChannelResponse, _super);
    function UpdateApnsSandboxChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApnsSandboxChannelResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateApnsSandboxChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApnsSandboxChannelResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApnsSandboxChannelResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApnsSandboxChannelResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApnsSandboxChannelResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApnsSandboxChannelResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateApnsSandboxChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApnsSandboxChannelResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateApnsSandboxChannelResponse)
    ], UpdateApnsSandboxChannelResponse.prototype, "updateApnsSandboxChannelResponse", void 0);
    return UpdateApnsSandboxChannelResponse;
}(SpeakeasyBase));
export { UpdateApnsSandboxChannelResponse };
