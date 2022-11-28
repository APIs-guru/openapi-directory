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
var CreateBotHeaders = /** @class */ (function (_super) {
    __extends(CreateBotHeaders, _super);
    function CreateBotHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateBotHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateBotHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateBotHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateBotHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateBotHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateBotHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateBotHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateBotHeaders;
}(SpeakeasyBase));
export { CreateBotHeaders };
// CreateBotRequestBodyDataPrivacy
/**
 * By default, data stored by Amazon Lex is encrypted. The <code>DataPrivacy</code> structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot.
**/
var CreateBotRequestBodyDataPrivacy = /** @class */ (function (_super) {
    __extends(CreateBotRequestBodyDataPrivacy, _super);
    function CreateBotRequestBodyDataPrivacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childDirected" }),
        __metadata("design:type", Boolean)
    ], CreateBotRequestBodyDataPrivacy.prototype, "childDirected", void 0);
    return CreateBotRequestBodyDataPrivacy;
}(SpeakeasyBase));
export { CreateBotRequestBodyDataPrivacy };
var CreateBotRequestBody = /** @class */ (function (_super) {
    __extends(CreateBotRequestBody, _super);
    function CreateBotRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=botName" }),
        __metadata("design:type", String)
    ], CreateBotRequestBody.prototype, "botName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=botTags" }),
        __metadata("design:type", Map)
    ], CreateBotRequestBody.prototype, "botTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataPrivacy" }),
        __metadata("design:type", CreateBotRequestBodyDataPrivacy)
    ], CreateBotRequestBody.prototype, "dataPrivacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateBotRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idleSessionTTLInSeconds" }),
        __metadata("design:type", Number)
    ], CreateBotRequestBody.prototype, "idleSessionTtlInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], CreateBotRequestBody.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testBotAliasTags" }),
        __metadata("design:type", Map)
    ], CreateBotRequestBody.prototype, "testBotAliasTags", void 0);
    return CreateBotRequestBody;
}(SpeakeasyBase));
export { CreateBotRequestBody };
var CreateBotRequest = /** @class */ (function (_super) {
    __extends(CreateBotRequest, _super);
    function CreateBotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateBotHeaders)
    ], CreateBotRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateBotRequestBody)
    ], CreateBotRequest.prototype, "request", void 0);
    return CreateBotRequest;
}(SpeakeasyBase));
export { CreateBotRequest };
var CreateBotResponse = /** @class */ (function (_super) {
    __extends(CreateBotResponse, _super);
    function CreateBotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBotResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateBotResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateBotResponse)
    ], CreateBotResponse.prototype, "createBotResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBotResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBotResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBotResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateBotResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBotResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBotResponse.prototype, "validationException", void 0);
    return CreateBotResponse;
}(SpeakeasyBase));
export { CreateBotResponse };
