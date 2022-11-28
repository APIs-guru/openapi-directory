import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateIntentPathParams extends SpeakeasyBase {
    botId: string;
    botVersion: string;
    intentId: string;
    localeId: string;
}
export declare class UpdateIntentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
**/
export declare class UpdateIntentRequestBodyDialogCodeHook extends SpeakeasyBase {
    enabled?: boolean;
}
/**
 * Determines if a Lambda function should be invoked for a specific intent.
**/
export declare class UpdateIntentRequestBodyFulfillmentCodeHook extends SpeakeasyBase {
    enabled?: boolean;
}
/**
 * Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
**/
export declare class UpdateIntentRequestBodyIntentClosingSetting extends SpeakeasyBase {
    active?: boolean;
    closingResponse?: shared.ResponseSpecification;
}
/**
 * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
**/
export declare class UpdateIntentRequestBodyIntentConfirmationSetting extends SpeakeasyBase {
    active?: boolean;
    declinationResponse?: shared.ResponseSpecification;
    promptSpecification?: shared.PromptSpecification;
}
/**
 * Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
**/
export declare class UpdateIntentRequestBodyKendraConfiguration extends SpeakeasyBase {
    kendraIndex?: string;
    queryFilterString?: string;
    queryFilterStringEnabled?: boolean;
}
export declare class UpdateIntentRequestBody extends SpeakeasyBase {
    description?: string;
    dialogCodeHook?: UpdateIntentRequestBodyDialogCodeHook;
    fulfillmentCodeHook?: UpdateIntentRequestBodyFulfillmentCodeHook;
    inputContexts?: shared.InputContext[];
    intentClosingSetting?: UpdateIntentRequestBodyIntentClosingSetting;
    intentConfirmationSetting?: UpdateIntentRequestBodyIntentConfirmationSetting;
    intentName: string;
    kendraConfiguration?: UpdateIntentRequestBodyKendraConfiguration;
    outputContexts?: shared.OutputContext[];
    parentIntentSignature?: string;
    sampleUtterances?: shared.SampleUtterance[];
    slotPriorities?: shared.SlotPriority[];
}
export declare class UpdateIntentRequest extends SpeakeasyBase {
    pathParams: UpdateIntentPathParams;
    headers: UpdateIntentHeaders;
    request: UpdateIntentRequestBody;
}
export declare class UpdateIntentResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    preconditionFailedException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    updateIntentResponse?: shared.UpdateIntentResponse;
    validationException?: any;
}
