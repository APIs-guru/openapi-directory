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
var UpdatePushTemplatePathParams = /** @class */ (function (_super) {
    __extends(UpdatePushTemplatePathParams, _super);
    function UpdatePushTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template-name" }),
        __metadata("design:type", String)
    ], UpdatePushTemplatePathParams.prototype, "templateName", void 0);
    return UpdatePushTemplatePathParams;
}(SpeakeasyBase));
export { UpdatePushTemplatePathParams };
var UpdatePushTemplateQueryParams = /** @class */ (function (_super) {
    __extends(UpdatePushTemplateQueryParams, _super);
    function UpdatePushTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=create-new-version" }),
        __metadata("design:type", Boolean)
    ], UpdatePushTemplateQueryParams.prototype, "createNewVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" }),
        __metadata("design:type", String)
    ], UpdatePushTemplateQueryParams.prototype, "version", void 0);
    return UpdatePushTemplateQueryParams;
}(SpeakeasyBase));
export { UpdatePushTemplateQueryParams };
var UpdatePushTemplateHeaders = /** @class */ (function (_super) {
    __extends(UpdatePushTemplateHeaders, _super);
    function UpdatePushTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdatePushTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdatePushTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdatePushTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdatePushTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdatePushTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdatePushTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdatePushTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdatePushTemplateHeaders;
}(SpeakeasyBase));
export { UpdatePushTemplateHeaders };
// UpdatePushTemplateRequestBodyPushNotificationTemplateRequest
/**
 * Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.
**/
var UpdatePushTemplateRequestBodyPushNotificationTemplateRequest = /** @class */ (function (_super) {
    __extends(UpdatePushTemplateRequestBodyPushNotificationTemplateRequest, _super);
    function UpdatePushTemplateRequestBodyPushNotificationTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ADM" }),
        __metadata("design:type", shared.AndroidPushNotificationTemplate)
    ], UpdatePushTemplateRequestBodyPushNotificationTemplateRequest.prototype, "adm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=APNS" }),
        __metadata("design:type", shared.ApnsPushNotificationTemplate)
    ], UpdatePushTemplateRequestBodyPushNotificationTemplateRequest.prototype, "apns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Baidu" }),
        __metadata("design:type", shared.AndroidPushNotificationTemplate)
    ], UpdatePushTemplateRequestBodyPushNotificationTemplateRequest.prototype, "baidu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Default" }),
        __metadata("design:type", shared.DefaultPushNotificationTemplate)
    ], UpdatePushTemplateRequestBodyPushNotificationTemplateRequest.prototype, "default", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultSubstitutions" }),
        __metadata("design:type", String)
    ], UpdatePushTemplateRequestBodyPushNotificationTemplateRequest.prototype, "defaultSubstitutions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GCM" }),
        __metadata("design:type", shared.AndroidPushNotificationTemplate)
    ], UpdatePushTemplateRequestBodyPushNotificationTemplateRequest.prototype, "gcm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommenderId" }),
        __metadata("design:type", String)
    ], UpdatePushTemplateRequestBodyPushNotificationTemplateRequest.prototype, "recommenderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateDescription" }),
        __metadata("design:type", String)
    ], UpdatePushTemplateRequestBodyPushNotificationTemplateRequest.prototype, "templateDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], UpdatePushTemplateRequestBodyPushNotificationTemplateRequest.prototype, "tags", void 0);
    return UpdatePushTemplateRequestBodyPushNotificationTemplateRequest;
}(SpeakeasyBase));
export { UpdatePushTemplateRequestBodyPushNotificationTemplateRequest };
var UpdatePushTemplateRequestBody = /** @class */ (function (_super) {
    __extends(UpdatePushTemplateRequestBody, _super);
    function UpdatePushTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PushNotificationTemplateRequest" }),
        __metadata("design:type", UpdatePushTemplateRequestBodyPushNotificationTemplateRequest)
    ], UpdatePushTemplateRequestBody.prototype, "pushNotificationTemplateRequest", void 0);
    return UpdatePushTemplateRequestBody;
}(SpeakeasyBase));
export { UpdatePushTemplateRequestBody };
var UpdatePushTemplateRequest = /** @class */ (function (_super) {
    __extends(UpdatePushTemplateRequest, _super);
    function UpdatePushTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePushTemplatePathParams)
    ], UpdatePushTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePushTemplateQueryParams)
    ], UpdatePushTemplateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePushTemplateHeaders)
    ], UpdatePushTemplateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdatePushTemplateRequestBody)
    ], UpdatePushTemplateRequest.prototype, "request", void 0);
    return UpdatePushTemplateRequest;
}(SpeakeasyBase));
export { UpdatePushTemplateRequest };
var UpdatePushTemplateResponse = /** @class */ (function (_super) {
    __extends(UpdatePushTemplateResponse, _super);
    function UpdatePushTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePushTemplateResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdatePushTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePushTemplateResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePushTemplateResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePushTemplateResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePushTemplateResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePushTemplateResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdatePushTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePushTemplateResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdatePushTemplateResponse)
    ], UpdatePushTemplateResponse.prototype, "updatePushTemplateResponse", void 0);
    return UpdatePushTemplateResponse;
}(SpeakeasyBase));
export { UpdatePushTemplateResponse };
