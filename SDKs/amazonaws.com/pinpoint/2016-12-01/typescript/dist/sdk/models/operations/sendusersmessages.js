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
var SendUsersMessagesPathParams = /** @class */ (function (_super) {
    __extends(SendUsersMessagesPathParams, _super);
    function SendUsersMessagesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], SendUsersMessagesPathParams.prototype, "applicationId", void 0);
    return SendUsersMessagesPathParams;
}(SpeakeasyBase));
export { SendUsersMessagesPathParams };
var SendUsersMessagesHeaders = /** @class */ (function (_super) {
    __extends(SendUsersMessagesHeaders, _super);
    function SendUsersMessagesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SendUsersMessagesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SendUsersMessagesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SendUsersMessagesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SendUsersMessagesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SendUsersMessagesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SendUsersMessagesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SendUsersMessagesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return SendUsersMessagesHeaders;
}(SpeakeasyBase));
export { SendUsersMessagesHeaders };
// SendUsersMessagesRequestBodySendUsersMessageRequest
/**
 * Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.
**/
var SendUsersMessagesRequestBodySendUsersMessageRequest = /** @class */ (function (_super) {
    __extends(SendUsersMessagesRequestBodySendUsersMessageRequest, _super);
    function SendUsersMessagesRequestBodySendUsersMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Context" }),
        __metadata("design:type", Map)
    ], SendUsersMessagesRequestBodySendUsersMessageRequest.prototype, "context", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MessageConfiguration" }),
        __metadata("design:type", shared.DirectMessageConfiguration)
    ], SendUsersMessagesRequestBodySendUsersMessageRequest.prototype, "messageConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateConfiguration" }),
        __metadata("design:type", shared.TemplateConfiguration)
    ], SendUsersMessagesRequestBodySendUsersMessageRequest.prototype, "templateConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TraceId" }),
        __metadata("design:type", String)
    ], SendUsersMessagesRequestBodySendUsersMessageRequest.prototype, "traceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Users", elemType: shared.EndpointSendConfiguration }),
        __metadata("design:type", Map)
    ], SendUsersMessagesRequestBodySendUsersMessageRequest.prototype, "users", void 0);
    return SendUsersMessagesRequestBodySendUsersMessageRequest;
}(SpeakeasyBase));
export { SendUsersMessagesRequestBodySendUsersMessageRequest };
var SendUsersMessagesRequestBody = /** @class */ (function (_super) {
    __extends(SendUsersMessagesRequestBody, _super);
    function SendUsersMessagesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SendUsersMessageRequest" }),
        __metadata("design:type", SendUsersMessagesRequestBodySendUsersMessageRequest)
    ], SendUsersMessagesRequestBody.prototype, "sendUsersMessageRequest", void 0);
    return SendUsersMessagesRequestBody;
}(SpeakeasyBase));
export { SendUsersMessagesRequestBody };
var SendUsersMessagesRequest = /** @class */ (function (_super) {
    __extends(SendUsersMessagesRequest, _super);
    function SendUsersMessagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SendUsersMessagesPathParams)
    ], SendUsersMessagesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SendUsersMessagesHeaders)
    ], SendUsersMessagesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SendUsersMessagesRequestBody)
    ], SendUsersMessagesRequest.prototype, "request", void 0);
    return SendUsersMessagesRequest;
}(SpeakeasyBase));
export { SendUsersMessagesRequest };
var SendUsersMessagesResponse = /** @class */ (function (_super) {
    __extends(SendUsersMessagesResponse, _super);
    function SendUsersMessagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendUsersMessagesResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SendUsersMessagesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendUsersMessagesResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendUsersMessagesResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendUsersMessagesResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendUsersMessagesResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendUsersMessagesResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SendUsersMessagesResponse)
    ], SendUsersMessagesResponse.prototype, "sendUsersMessagesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SendUsersMessagesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendUsersMessagesResponse.prototype, "tooManyRequestsException", void 0);
    return SendUsersMessagesResponse;
}(SpeakeasyBase));
export { SendUsersMessagesResponse };
