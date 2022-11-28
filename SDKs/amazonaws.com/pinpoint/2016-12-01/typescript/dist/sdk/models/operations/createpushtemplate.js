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
var CreatePushTemplatePathParams = /** @class */ (function (_super) {
    __extends(CreatePushTemplatePathParams, _super);
    function CreatePushTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template-name" }),
        __metadata("design:type", String)
    ], CreatePushTemplatePathParams.prototype, "templateName", void 0);
    return CreatePushTemplatePathParams;
}(SpeakeasyBase));
export { CreatePushTemplatePathParams };
var CreatePushTemplateHeaders = /** @class */ (function (_super) {
    __extends(CreatePushTemplateHeaders, _super);
    function CreatePushTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreatePushTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreatePushTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreatePushTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreatePushTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreatePushTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreatePushTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreatePushTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreatePushTemplateHeaders;
}(SpeakeasyBase));
export { CreatePushTemplateHeaders };
// CreatePushTemplateRequestBodyPushNotificationTemplateRequest
/**
 * Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.
**/
var CreatePushTemplateRequestBodyPushNotificationTemplateRequest = /** @class */ (function (_super) {
    __extends(CreatePushTemplateRequestBodyPushNotificationTemplateRequest, _super);
    function CreatePushTemplateRequestBodyPushNotificationTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ADM" }),
        __metadata("design:type", shared.AndroidPushNotificationTemplate)
    ], CreatePushTemplateRequestBodyPushNotificationTemplateRequest.prototype, "adm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=APNS" }),
        __metadata("design:type", shared.ApnsPushNotificationTemplate)
    ], CreatePushTemplateRequestBodyPushNotificationTemplateRequest.prototype, "apns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Baidu" }),
        __metadata("design:type", shared.AndroidPushNotificationTemplate)
    ], CreatePushTemplateRequestBodyPushNotificationTemplateRequest.prototype, "baidu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Default" }),
        __metadata("design:type", shared.DefaultPushNotificationTemplate)
    ], CreatePushTemplateRequestBodyPushNotificationTemplateRequest.prototype, "default", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultSubstitutions" }),
        __metadata("design:type", String)
    ], CreatePushTemplateRequestBodyPushNotificationTemplateRequest.prototype, "defaultSubstitutions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GCM" }),
        __metadata("design:type", shared.AndroidPushNotificationTemplate)
    ], CreatePushTemplateRequestBodyPushNotificationTemplateRequest.prototype, "gcm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommenderId" }),
        __metadata("design:type", String)
    ], CreatePushTemplateRequestBodyPushNotificationTemplateRequest.prototype, "recommenderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateDescription" }),
        __metadata("design:type", String)
    ], CreatePushTemplateRequestBodyPushNotificationTemplateRequest.prototype, "templateDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreatePushTemplateRequestBodyPushNotificationTemplateRequest.prototype, "tags", void 0);
    return CreatePushTemplateRequestBodyPushNotificationTemplateRequest;
}(SpeakeasyBase));
export { CreatePushTemplateRequestBodyPushNotificationTemplateRequest };
var CreatePushTemplateRequestBody = /** @class */ (function (_super) {
    __extends(CreatePushTemplateRequestBody, _super);
    function CreatePushTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PushNotificationTemplateRequest" }),
        __metadata("design:type", CreatePushTemplateRequestBodyPushNotificationTemplateRequest)
    ], CreatePushTemplateRequestBody.prototype, "pushNotificationTemplateRequest", void 0);
    return CreatePushTemplateRequestBody;
}(SpeakeasyBase));
export { CreatePushTemplateRequestBody };
var CreatePushTemplateRequest = /** @class */ (function (_super) {
    __extends(CreatePushTemplateRequest, _super);
    function CreatePushTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePushTemplatePathParams)
    ], CreatePushTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePushTemplateHeaders)
    ], CreatePushTemplateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreatePushTemplateRequestBody)
    ], CreatePushTemplateRequest.prototype, "request", void 0);
    return CreatePushTemplateRequest;
}(SpeakeasyBase));
export { CreatePushTemplateRequest };
var CreatePushTemplateResponse = /** @class */ (function (_super) {
    __extends(CreatePushTemplateResponse, _super);
    function CreatePushTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePushTemplateResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatePushTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreatePushTemplateResponse)
    ], CreatePushTemplateResponse.prototype, "createPushTemplateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePushTemplateResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePushTemplateResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePushTemplateResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatePushTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePushTemplateResponse.prototype, "tooManyRequestsException", void 0);
    return CreatePushTemplateResponse;
}(SpeakeasyBase));
export { CreatePushTemplateResponse };
