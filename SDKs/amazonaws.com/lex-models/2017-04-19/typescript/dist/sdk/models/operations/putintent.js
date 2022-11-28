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
var PutIntentPathParams = /** @class */ (function (_super) {
    __extends(PutIntentPathParams, _super);
    function PutIntentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], PutIntentPathParams.prototype, "name", void 0);
    return PutIntentPathParams;
}(SpeakeasyBase));
export { PutIntentPathParams };
var PutIntentHeaders = /** @class */ (function (_super) {
    __extends(PutIntentHeaders, _super);
    function PutIntentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutIntentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutIntentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutIntentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutIntentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutIntentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutIntentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutIntentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutIntentHeaders;
}(SpeakeasyBase));
export { PutIntentHeaders };
// PutIntentRequestBodyConclusionStatement
/**
 * A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey.
**/
var PutIntentRequestBodyConclusionStatement = /** @class */ (function (_super) {
    __extends(PutIntentRequestBodyConclusionStatement, _super);
    function PutIntentRequestBodyConclusionStatement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messages", elemType: shared.Message }),
        __metadata("design:type", Array)
    ], PutIntentRequestBodyConclusionStatement.prototype, "messages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseCard" }),
        __metadata("design:type", String)
    ], PutIntentRequestBodyConclusionStatement.prototype, "responseCard", void 0);
    return PutIntentRequestBodyConclusionStatement;
}(SpeakeasyBase));
export { PutIntentRequestBodyConclusionStatement };
// PutIntentRequestBodyConfirmationPrompt
/**
 * Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.
**/
var PutIntentRequestBodyConfirmationPrompt = /** @class */ (function (_super) {
    __extends(PutIntentRequestBodyConfirmationPrompt, _super);
    function PutIntentRequestBodyConfirmationPrompt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxAttempts" }),
        __metadata("design:type", Number)
    ], PutIntentRequestBodyConfirmationPrompt.prototype, "maxAttempts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messages", elemType: shared.Message }),
        __metadata("design:type", Array)
    ], PutIntentRequestBodyConfirmationPrompt.prototype, "messages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseCard" }),
        __metadata("design:type", String)
    ], PutIntentRequestBodyConfirmationPrompt.prototype, "responseCard", void 0);
    return PutIntentRequestBodyConfirmationPrompt;
}(SpeakeasyBase));
export { PutIntentRequestBodyConfirmationPrompt };
// PutIntentRequestBodyDialogCodeHook
/**
 * Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot..
**/
var PutIntentRequestBodyDialogCodeHook = /** @class */ (function (_super) {
    __extends(PutIntentRequestBodyDialogCodeHook, _super);
    function PutIntentRequestBodyDialogCodeHook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messageVersion" }),
        __metadata("design:type", String)
    ], PutIntentRequestBodyDialogCodeHook.prototype, "messageVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PutIntentRequestBodyDialogCodeHook.prototype, "uri", void 0);
    return PutIntentRequestBodyDialogCodeHook;
}(SpeakeasyBase));
export { PutIntentRequestBodyDialogCodeHook };
// PutIntentRequestBodyFollowUpPrompt
/**
 * A prompt for additional activity after an intent is fulfilled. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks.
**/
var PutIntentRequestBodyFollowUpPrompt = /** @class */ (function (_super) {
    __extends(PutIntentRequestBodyFollowUpPrompt, _super);
    function PutIntentRequestBodyFollowUpPrompt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prompt" }),
        __metadata("design:type", shared.Prompt)
    ], PutIntentRequestBodyFollowUpPrompt.prototype, "prompt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rejectionStatement" }),
        __metadata("design:type", shared.Statement)
    ], PutIntentRequestBodyFollowUpPrompt.prototype, "rejectionStatement", void 0);
    return PutIntentRequestBodyFollowUpPrompt;
}(SpeakeasyBase));
export { PutIntentRequestBodyFollowUpPrompt };
// PutIntentRequestBodyFulfillmentActivity
/**
 * <p> Describes how the intent is fulfilled after the user provides all of the information required for the intent. You can provide a Lambda function to process the intent, or you can return the intent information to the client application. We recommend that you use a Lambda function so that the relevant logic lives in the Cloud and limit the client-side code primarily to presentation. If you need to update the logic, you only update the Lambda function; you don't need to upgrade your client application. </p> <p>Consider the following examples:</p> <ul> <li> <p>In a pizza ordering application, after the user provides all of the information for placing an order, you use a Lambda function to place an order with a pizzeria. </p> </li> <li> <p>In a gaming application, when a user says "pick up a rock," this information must go back to the client application so that it can perform the operation and update the graphics. In this case, you want Amazon Lex to return the intent data to the client. </p> </li> </ul>
**/
var PutIntentRequestBodyFulfillmentActivity = /** @class */ (function (_super) {
    __extends(PutIntentRequestBodyFulfillmentActivity, _super);
    function PutIntentRequestBodyFulfillmentActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=codeHook" }),
        __metadata("design:type", shared.CodeHook)
    ], PutIntentRequestBodyFulfillmentActivity.prototype, "codeHook", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PutIntentRequestBodyFulfillmentActivity.prototype, "type", void 0);
    return PutIntentRequestBodyFulfillmentActivity;
}(SpeakeasyBase));
export { PutIntentRequestBodyFulfillmentActivity };
// PutIntentRequestBodyKendraConfiguration
/**
 * Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance. For more information, see <a href="http://docs.aws.amazon.com/lex/latest/dg/built-in-intent-kendra-search.html"> AMAZON.KendraSearchIntent</a>.
**/
var PutIntentRequestBodyKendraConfiguration = /** @class */ (function (_super) {
    __extends(PutIntentRequestBodyKendraConfiguration, _super);
    function PutIntentRequestBodyKendraConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kendraIndex" }),
        __metadata("design:type", String)
    ], PutIntentRequestBodyKendraConfiguration.prototype, "kendraIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryFilterString" }),
        __metadata("design:type", String)
    ], PutIntentRequestBodyKendraConfiguration.prototype, "queryFilterString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], PutIntentRequestBodyKendraConfiguration.prototype, "role", void 0);
    return PutIntentRequestBodyKendraConfiguration;
}(SpeakeasyBase));
export { PutIntentRequestBodyKendraConfiguration };
// PutIntentRequestBodyRejectionStatement
/**
 * A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey.
**/
var PutIntentRequestBodyRejectionStatement = /** @class */ (function (_super) {
    __extends(PutIntentRequestBodyRejectionStatement, _super);
    function PutIntentRequestBodyRejectionStatement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messages", elemType: shared.Message }),
        __metadata("design:type", Array)
    ], PutIntentRequestBodyRejectionStatement.prototype, "messages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseCard" }),
        __metadata("design:type", String)
    ], PutIntentRequestBodyRejectionStatement.prototype, "responseCard", void 0);
    return PutIntentRequestBodyRejectionStatement;
}(SpeakeasyBase));
export { PutIntentRequestBodyRejectionStatement };
var PutIntentRequestBody = /** @class */ (function (_super) {
    __extends(PutIntentRequestBody, _super);
    function PutIntentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checksum" }),
        __metadata("design:type", String)
    ], PutIntentRequestBody.prototype, "checksum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conclusionStatement" }),
        __metadata("design:type", PutIntentRequestBodyConclusionStatement)
    ], PutIntentRequestBody.prototype, "conclusionStatement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confirmationPrompt" }),
        __metadata("design:type", PutIntentRequestBodyConfirmationPrompt)
    ], PutIntentRequestBody.prototype, "confirmationPrompt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createVersion" }),
        __metadata("design:type", Boolean)
    ], PutIntentRequestBody.prototype, "createVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PutIntentRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dialogCodeHook" }),
        __metadata("design:type", PutIntentRequestBodyDialogCodeHook)
    ], PutIntentRequestBody.prototype, "dialogCodeHook", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followUpPrompt" }),
        __metadata("design:type", PutIntentRequestBodyFollowUpPrompt)
    ], PutIntentRequestBody.prototype, "followUpPrompt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fulfillmentActivity" }),
        __metadata("design:type", PutIntentRequestBodyFulfillmentActivity)
    ], PutIntentRequestBody.prototype, "fulfillmentActivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputContexts", elemType: shared.InputContext }),
        __metadata("design:type", Array)
    ], PutIntentRequestBody.prototype, "inputContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kendraConfiguration" }),
        __metadata("design:type", PutIntentRequestBodyKendraConfiguration)
    ], PutIntentRequestBody.prototype, "kendraConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputContexts", elemType: shared.OutputContext }),
        __metadata("design:type", Array)
    ], PutIntentRequestBody.prototype, "outputContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentIntentSignature" }),
        __metadata("design:type", String)
    ], PutIntentRequestBody.prototype, "parentIntentSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rejectionStatement" }),
        __metadata("design:type", PutIntentRequestBodyRejectionStatement)
    ], PutIntentRequestBody.prototype, "rejectionStatement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sampleUtterances" }),
        __metadata("design:type", Array)
    ], PutIntentRequestBody.prototype, "sampleUtterances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slots", elemType: shared.Slot }),
        __metadata("design:type", Array)
    ], PutIntentRequestBody.prototype, "slots", void 0);
    return PutIntentRequestBody;
}(SpeakeasyBase));
export { PutIntentRequestBody };
var PutIntentRequest = /** @class */ (function (_super) {
    __extends(PutIntentRequest, _super);
    function PutIntentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutIntentPathParams)
    ], PutIntentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutIntentHeaders)
    ], PutIntentRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutIntentRequestBody)
    ], PutIntentRequest.prototype, "request", void 0);
    return PutIntentRequest;
}(SpeakeasyBase));
export { PutIntentRequest };
var PutIntentResponse = /** @class */ (function (_super) {
    __extends(PutIntentResponse, _super);
    function PutIntentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutIntentResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutIntentResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutIntentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutIntentResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutIntentResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutIntentResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PutIntentResponse)
    ], PutIntentResponse.prototype, "putIntentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutIntentResponse.prototype, "statusCode", void 0);
    return PutIntentResponse;
}(SpeakeasyBase));
export { PutIntentResponse };
