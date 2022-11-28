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
var CreateIntentPathParams = /** @class */ (function (_super) {
    __extends(CreateIntentPathParams, _super);
    function CreateIntentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botId" }),
        __metadata("design:type", String)
    ], CreateIntentPathParams.prototype, "botId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botVersion" }),
        __metadata("design:type", String)
    ], CreateIntentPathParams.prototype, "botVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=localeId" }),
        __metadata("design:type", String)
    ], CreateIntentPathParams.prototype, "localeId", void 0);
    return CreateIntentPathParams;
}(SpeakeasyBase));
export { CreateIntentPathParams };
var CreateIntentHeaders = /** @class */ (function (_super) {
    __extends(CreateIntentHeaders, _super);
    function CreateIntentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateIntentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateIntentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateIntentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateIntentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateIntentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateIntentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateIntentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateIntentHeaders;
}(SpeakeasyBase));
export { CreateIntentHeaders };
// CreateIntentRequestBodyDialogCodeHook
/**
 * Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
**/
var CreateIntentRequestBodyDialogCodeHook = /** @class */ (function (_super) {
    __extends(CreateIntentRequestBodyDialogCodeHook, _super);
    function CreateIntentRequestBodyDialogCodeHook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], CreateIntentRequestBodyDialogCodeHook.prototype, "enabled", void 0);
    return CreateIntentRequestBodyDialogCodeHook;
}(SpeakeasyBase));
export { CreateIntentRequestBodyDialogCodeHook };
// CreateIntentRequestBodyFulfillmentCodeHook
/**
 * Determines if a Lambda function should be invoked for a specific intent.
**/
var CreateIntentRequestBodyFulfillmentCodeHook = /** @class */ (function (_super) {
    __extends(CreateIntentRequestBodyFulfillmentCodeHook, _super);
    function CreateIntentRequestBodyFulfillmentCodeHook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], CreateIntentRequestBodyFulfillmentCodeHook.prototype, "enabled", void 0);
    return CreateIntentRequestBodyFulfillmentCodeHook;
}(SpeakeasyBase));
export { CreateIntentRequestBodyFulfillmentCodeHook };
// CreateIntentRequestBodyIntentClosingSetting
/**
 * Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
**/
var CreateIntentRequestBodyIntentClosingSetting = /** @class */ (function (_super) {
    __extends(CreateIntentRequestBodyIntentClosingSetting, _super);
    function CreateIntentRequestBodyIntentClosingSetting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateIntentRequestBodyIntentClosingSetting.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closingResponse" }),
        __metadata("design:type", shared.ResponseSpecification)
    ], CreateIntentRequestBodyIntentClosingSetting.prototype, "closingResponse", void 0);
    return CreateIntentRequestBodyIntentClosingSetting;
}(SpeakeasyBase));
export { CreateIntentRequestBodyIntentClosingSetting };
// CreateIntentRequestBodyIntentConfirmationSetting
/**
 * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
**/
var CreateIntentRequestBodyIntentConfirmationSetting = /** @class */ (function (_super) {
    __extends(CreateIntentRequestBodyIntentConfirmationSetting, _super);
    function CreateIntentRequestBodyIntentConfirmationSetting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateIntentRequestBodyIntentConfirmationSetting.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=declinationResponse" }),
        __metadata("design:type", shared.ResponseSpecification)
    ], CreateIntentRequestBodyIntentConfirmationSetting.prototype, "declinationResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promptSpecification" }),
        __metadata("design:type", shared.PromptSpecification)
    ], CreateIntentRequestBodyIntentConfirmationSetting.prototype, "promptSpecification", void 0);
    return CreateIntentRequestBodyIntentConfirmationSetting;
}(SpeakeasyBase));
export { CreateIntentRequestBodyIntentConfirmationSetting };
// CreateIntentRequestBodyKendraConfiguration
/**
 * Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
**/
var CreateIntentRequestBodyKendraConfiguration = /** @class */ (function (_super) {
    __extends(CreateIntentRequestBodyKendraConfiguration, _super);
    function CreateIntentRequestBodyKendraConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kendraIndex" }),
        __metadata("design:type", String)
    ], CreateIntentRequestBodyKendraConfiguration.prototype, "kendraIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryFilterString" }),
        __metadata("design:type", String)
    ], CreateIntentRequestBodyKendraConfiguration.prototype, "queryFilterString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryFilterStringEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateIntentRequestBodyKendraConfiguration.prototype, "queryFilterStringEnabled", void 0);
    return CreateIntentRequestBodyKendraConfiguration;
}(SpeakeasyBase));
export { CreateIntentRequestBodyKendraConfiguration };
var CreateIntentRequestBody = /** @class */ (function (_super) {
    __extends(CreateIntentRequestBody, _super);
    function CreateIntentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateIntentRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dialogCodeHook" }),
        __metadata("design:type", CreateIntentRequestBodyDialogCodeHook)
    ], CreateIntentRequestBody.prototype, "dialogCodeHook", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fulfillmentCodeHook" }),
        __metadata("design:type", CreateIntentRequestBodyFulfillmentCodeHook)
    ], CreateIntentRequestBody.prototype, "fulfillmentCodeHook", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputContexts", elemType: shared.InputContext }),
        __metadata("design:type", Array)
    ], CreateIntentRequestBody.prototype, "inputContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intentClosingSetting" }),
        __metadata("design:type", CreateIntentRequestBodyIntentClosingSetting)
    ], CreateIntentRequestBody.prototype, "intentClosingSetting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intentConfirmationSetting" }),
        __metadata("design:type", CreateIntentRequestBodyIntentConfirmationSetting)
    ], CreateIntentRequestBody.prototype, "intentConfirmationSetting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intentName" }),
        __metadata("design:type", String)
    ], CreateIntentRequestBody.prototype, "intentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kendraConfiguration" }),
        __metadata("design:type", CreateIntentRequestBodyKendraConfiguration)
    ], CreateIntentRequestBody.prototype, "kendraConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputContexts", elemType: shared.OutputContext }),
        __metadata("design:type", Array)
    ], CreateIntentRequestBody.prototype, "outputContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentIntentSignature" }),
        __metadata("design:type", String)
    ], CreateIntentRequestBody.prototype, "parentIntentSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sampleUtterances", elemType: shared.SampleUtterance }),
        __metadata("design:type", Array)
    ], CreateIntentRequestBody.prototype, "sampleUtterances", void 0);
    return CreateIntentRequestBody;
}(SpeakeasyBase));
export { CreateIntentRequestBody };
var CreateIntentRequest = /** @class */ (function (_super) {
    __extends(CreateIntentRequest, _super);
    function CreateIntentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateIntentPathParams)
    ], CreateIntentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateIntentHeaders)
    ], CreateIntentRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateIntentRequestBody)
    ], CreateIntentRequest.prototype, "request", void 0);
    return CreateIntentRequest;
}(SpeakeasyBase));
export { CreateIntentRequest };
var CreateIntentResponse = /** @class */ (function (_super) {
    __extends(CreateIntentResponse, _super);
    function CreateIntentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateIntentResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateIntentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateIntentResponse)
    ], CreateIntentResponse.prototype, "createIntentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateIntentResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateIntentResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateIntentResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateIntentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateIntentResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateIntentResponse.prototype, "validationException", void 0);
    return CreateIntentResponse;
}(SpeakeasyBase));
export { CreateIntentResponse };
