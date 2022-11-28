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
var UpdateEmailChannelPathParams = /** @class */ (function (_super) {
    __extends(UpdateEmailChannelPathParams, _super);
    function UpdateEmailChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], UpdateEmailChannelPathParams.prototype, "applicationId", void 0);
    return UpdateEmailChannelPathParams;
}(SpeakeasyBase));
export { UpdateEmailChannelPathParams };
var UpdateEmailChannelHeaders = /** @class */ (function (_super) {
    __extends(UpdateEmailChannelHeaders, _super);
    function UpdateEmailChannelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateEmailChannelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateEmailChannelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateEmailChannelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateEmailChannelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateEmailChannelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateEmailChannelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateEmailChannelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateEmailChannelHeaders;
}(SpeakeasyBase));
export { UpdateEmailChannelHeaders };
// UpdateEmailChannelRequestBodyEmailChannelRequest
/**
 * Specifies the status and settings of the email channel for an application.
**/
var UpdateEmailChannelRequestBodyEmailChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateEmailChannelRequestBodyEmailChannelRequest, _super);
    function UpdateEmailChannelRequestBodyEmailChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConfigurationSet" }),
        __metadata("design:type", String)
    ], UpdateEmailChannelRequestBodyEmailChannelRequest.prototype, "configurationSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateEmailChannelRequestBodyEmailChannelRequest.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FromAddress" }),
        __metadata("design:type", String)
    ], UpdateEmailChannelRequestBodyEmailChannelRequest.prototype, "fromAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identity" }),
        __metadata("design:type", String)
    ], UpdateEmailChannelRequestBodyEmailChannelRequest.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], UpdateEmailChannelRequestBodyEmailChannelRequest.prototype, "roleArn", void 0);
    return UpdateEmailChannelRequestBodyEmailChannelRequest;
}(SpeakeasyBase));
export { UpdateEmailChannelRequestBodyEmailChannelRequest };
var UpdateEmailChannelRequestBody = /** @class */ (function (_super) {
    __extends(UpdateEmailChannelRequestBody, _super);
    function UpdateEmailChannelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmailChannelRequest" }),
        __metadata("design:type", UpdateEmailChannelRequestBodyEmailChannelRequest)
    ], UpdateEmailChannelRequestBody.prototype, "emailChannelRequest", void 0);
    return UpdateEmailChannelRequestBody;
}(SpeakeasyBase));
export { UpdateEmailChannelRequestBody };
var UpdateEmailChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateEmailChannelRequest, _super);
    function UpdateEmailChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateEmailChannelPathParams)
    ], UpdateEmailChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateEmailChannelHeaders)
    ], UpdateEmailChannelRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateEmailChannelRequestBody)
    ], UpdateEmailChannelRequest.prototype, "request", void 0);
    return UpdateEmailChannelRequest;
}(SpeakeasyBase));
export { UpdateEmailChannelRequest };
var UpdateEmailChannelResponse = /** @class */ (function (_super) {
    __extends(UpdateEmailChannelResponse, _super);
    function UpdateEmailChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEmailChannelResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateEmailChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEmailChannelResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEmailChannelResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEmailChannelResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEmailChannelResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEmailChannelResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateEmailChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEmailChannelResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateEmailChannelResponse)
    ], UpdateEmailChannelResponse.prototype, "updateEmailChannelResponse", void 0);
    return UpdateEmailChannelResponse;
}(SpeakeasyBase));
export { UpdateEmailChannelResponse };
