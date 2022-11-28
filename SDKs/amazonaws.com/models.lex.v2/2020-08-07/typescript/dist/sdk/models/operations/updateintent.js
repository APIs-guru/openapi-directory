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
var UpdateIntentPathParams = /** @class */ (function (_super) {
    __extends(UpdateIntentPathParams, _super);
    function UpdateIntentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botId" }),
        __metadata("design:type", String)
    ], UpdateIntentPathParams.prototype, "botId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botVersion" }),
        __metadata("design:type", String)
    ], UpdateIntentPathParams.prototype, "botVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=intentId" }),
        __metadata("design:type", String)
    ], UpdateIntentPathParams.prototype, "intentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=localeId" }),
        __metadata("design:type", String)
    ], UpdateIntentPathParams.prototype, "localeId", void 0);
    return UpdateIntentPathParams;
}(SpeakeasyBase));
export { UpdateIntentPathParams };
var UpdateIntentHeaders = /** @class */ (function (_super) {
    __extends(UpdateIntentHeaders, _super);
    function UpdateIntentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateIntentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateIntentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateIntentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateIntentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateIntentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateIntentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateIntentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateIntentHeaders;
}(SpeakeasyBase));
export { UpdateIntentHeaders };
// UpdateIntentRequestBodyDialogCodeHook
/**
 * Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
**/
var UpdateIntentRequestBodyDialogCodeHook = /** @class */ (function (_super) {
    __extends(UpdateIntentRequestBodyDialogCodeHook, _super);
    function UpdateIntentRequestBodyDialogCodeHook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateIntentRequestBodyDialogCodeHook.prototype, "enabled", void 0);
    return UpdateIntentRequestBodyDialogCodeHook;
}(SpeakeasyBase));
export { UpdateIntentRequestBodyDialogCodeHook };
// UpdateIntentRequestBodyFulfillmentCodeHook
/**
 * Determines if a Lambda function should be invoked for a specific intent.
**/
var UpdateIntentRequestBodyFulfillmentCodeHook = /** @class */ (function (_super) {
    __extends(UpdateIntentRequestBodyFulfillmentCodeHook, _super);
    function UpdateIntentRequestBodyFulfillmentCodeHook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateIntentRequestBodyFulfillmentCodeHook.prototype, "enabled", void 0);
    return UpdateIntentRequestBodyFulfillmentCodeHook;
}(SpeakeasyBase));
export { UpdateIntentRequestBodyFulfillmentCodeHook };
// UpdateIntentRequestBodyIntentClosingSetting
/**
 * Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
**/
var UpdateIntentRequestBodyIntentClosingSetting = /** @class */ (function (_super) {
    __extends(UpdateIntentRequestBodyIntentClosingSetting, _super);
    function UpdateIntentRequestBodyIntentClosingSetting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], UpdateIntentRequestBodyIntentClosingSetting.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closingResponse" }),
        __metadata("design:type", shared.ResponseSpecification)
    ], UpdateIntentRequestBodyIntentClosingSetting.prototype, "closingResponse", void 0);
    return UpdateIntentRequestBodyIntentClosingSetting;
}(SpeakeasyBase));
export { UpdateIntentRequestBodyIntentClosingSetting };
// UpdateIntentRequestBodyIntentConfirmationSetting
/**
 * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
**/
var UpdateIntentRequestBodyIntentConfirmationSetting = /** @class */ (function (_super) {
    __extends(UpdateIntentRequestBodyIntentConfirmationSetting, _super);
    function UpdateIntentRequestBodyIntentConfirmationSetting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], UpdateIntentRequestBodyIntentConfirmationSetting.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=declinationResponse" }),
        __metadata("design:type", shared.ResponseSpecification)
    ], UpdateIntentRequestBodyIntentConfirmationSetting.prototype, "declinationResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promptSpecification" }),
        __metadata("design:type", shared.PromptSpecification)
    ], UpdateIntentRequestBodyIntentConfirmationSetting.prototype, "promptSpecification", void 0);
    return UpdateIntentRequestBodyIntentConfirmationSetting;
}(SpeakeasyBase));
export { UpdateIntentRequestBodyIntentConfirmationSetting };
// UpdateIntentRequestBodyKendraConfiguration
/**
 * Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
**/
var UpdateIntentRequestBodyKendraConfiguration = /** @class */ (function (_super) {
    __extends(UpdateIntentRequestBodyKendraConfiguration, _super);
    function UpdateIntentRequestBodyKendraConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kendraIndex" }),
        __metadata("design:type", String)
    ], UpdateIntentRequestBodyKendraConfiguration.prototype, "kendraIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryFilterString" }),
        __metadata("design:type", String)
    ], UpdateIntentRequestBodyKendraConfiguration.prototype, "queryFilterString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryFilterStringEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateIntentRequestBodyKendraConfiguration.prototype, "queryFilterStringEnabled", void 0);
    return UpdateIntentRequestBodyKendraConfiguration;
}(SpeakeasyBase));
export { UpdateIntentRequestBodyKendraConfiguration };
var UpdateIntentRequestBody = /** @class */ (function (_super) {
    __extends(UpdateIntentRequestBody, _super);
    function UpdateIntentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateIntentRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dialogCodeHook" }),
        __metadata("design:type", UpdateIntentRequestBodyDialogCodeHook)
    ], UpdateIntentRequestBody.prototype, "dialogCodeHook", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fulfillmentCodeHook" }),
        __metadata("design:type", UpdateIntentRequestBodyFulfillmentCodeHook)
    ], UpdateIntentRequestBody.prototype, "fulfillmentCodeHook", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputContexts", elemType: shared.InputContext }),
        __metadata("design:type", Array)
    ], UpdateIntentRequestBody.prototype, "inputContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intentClosingSetting" }),
        __metadata("design:type", UpdateIntentRequestBodyIntentClosingSetting)
    ], UpdateIntentRequestBody.prototype, "intentClosingSetting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intentConfirmationSetting" }),
        __metadata("design:type", UpdateIntentRequestBodyIntentConfirmationSetting)
    ], UpdateIntentRequestBody.prototype, "intentConfirmationSetting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intentName" }),
        __metadata("design:type", String)
    ], UpdateIntentRequestBody.prototype, "intentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kendraConfiguration" }),
        __metadata("design:type", UpdateIntentRequestBodyKendraConfiguration)
    ], UpdateIntentRequestBody.prototype, "kendraConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputContexts", elemType: shared.OutputContext }),
        __metadata("design:type", Array)
    ], UpdateIntentRequestBody.prototype, "outputContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentIntentSignature" }),
        __metadata("design:type", String)
    ], UpdateIntentRequestBody.prototype, "parentIntentSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sampleUtterances", elemType: shared.SampleUtterance }),
        __metadata("design:type", Array)
    ], UpdateIntentRequestBody.prototype, "sampleUtterances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slotPriorities", elemType: shared.SlotPriority }),
        __metadata("design:type", Array)
    ], UpdateIntentRequestBody.prototype, "slotPriorities", void 0);
    return UpdateIntentRequestBody;
}(SpeakeasyBase));
export { UpdateIntentRequestBody };
var UpdateIntentRequest = /** @class */ (function (_super) {
    __extends(UpdateIntentRequest, _super);
    function UpdateIntentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateIntentPathParams)
    ], UpdateIntentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateIntentHeaders)
    ], UpdateIntentRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateIntentRequestBody)
    ], UpdateIntentRequest.prototype, "request", void 0);
    return UpdateIntentRequest;
}(SpeakeasyBase));
export { UpdateIntentRequest };
var UpdateIntentResponse = /** @class */ (function (_super) {
    __extends(UpdateIntentResponse, _super);
    function UpdateIntentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateIntentResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateIntentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateIntentResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateIntentResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateIntentResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateIntentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateIntentResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateIntentResponse)
    ], UpdateIntentResponse.prototype, "updateIntentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateIntentResponse.prototype, "validationException", void 0);
    return UpdateIntentResponse;
}(SpeakeasyBase));
export { UpdateIntentResponse };
