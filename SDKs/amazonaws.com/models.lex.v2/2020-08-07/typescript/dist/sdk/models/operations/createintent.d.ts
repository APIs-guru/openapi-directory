import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateIntentPathParams extends SpeakeasyBase {
    botId: string;
    botVersion: string;
    localeId: string;
}
export declare class CreateIntentHeaders extends SpeakeasyBase {
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
export declare class CreateIntentRequestBodyDialogCodeHook extends SpeakeasyBase {
    enabled?: boolean;
}
/**
 * Determines if a Lambda function should be invoked for a specific intent.
**/
export declare class CreateIntentRequestBodyFulfillmentCodeHook extends SpeakeasyBase {
    enabled?: boolean;
}
/**
 * Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
**/
export declare class CreateIntentRequestBodyIntentClosingSetting extends SpeakeasyBase {
    active?: boolean;
    closingResponse?: shared.ResponseSpecification;
}
/**
 * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
**/
export declare class CreateIntentRequestBodyIntentConfirmationSetting extends SpeakeasyBase {
    active?: boolean;
    declinationResponse?: shared.ResponseSpecification;
    promptSpecification?: shared.PromptSpecification;
}
/**
 * Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
**/
export declare class CreateIntentRequestBodyKendraConfiguration extends SpeakeasyBase {
    kendraIndex?: string;
    queryFilterString?: string;
    queryFilterStringEnabled?: boolean;
}
export declare class CreateIntentRequestBody extends SpeakeasyBase {
    description?: string;
    dialogCodeHook?: CreateIntentRequestBodyDialogCodeHook;
    fulfillmentCodeHook?: CreateIntentRequestBodyFulfillmentCodeHook;
    inputContexts?: shared.InputContext[];
    intentClosingSetting?: CreateIntentRequestBodyIntentClosingSetting;
    intentConfirmationSetting?: CreateIntentRequestBodyIntentConfirmationSetting;
    intentName: string;
    kendraConfiguration?: CreateIntentRequestBodyKendraConfiguration;
    outputContexts?: shared.OutputContext[];
    parentIntentSignature?: string;
    sampleUtterances?: shared.SampleUtterance[];
}
export declare class CreateIntentRequest extends SpeakeasyBase {
    pathParams: CreateIntentPathParams;
    headers: CreateIntentHeaders;
    request: CreateIntentRequestBody;
}
export declare class CreateIntentResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    createIntentResponse?: shared.CreateIntentResponse;
    internalServerException?: any;
    preconditionFailedException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
