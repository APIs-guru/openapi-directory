import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartHumanLoopHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Attributes of the data specified by the customer. Use these to describe the data to be labeled.
**/
export declare class StartHumanLoopRequestBodyDataAttributes extends SpeakeasyBase {
    contentClassifiers?: shared.ContentClassifierEnum[];
}
/**
 * An object containing the human loop input in JSON format.
**/
export declare class StartHumanLoopRequestBodyHumanLoopInput extends SpeakeasyBase {
    inputContent?: string;
}
export declare class StartHumanLoopRequestBody extends SpeakeasyBase {
    dataAttributes?: StartHumanLoopRequestBodyDataAttributes;
    flowDefinitionArn: string;
    humanLoopInput: StartHumanLoopRequestBodyHumanLoopInput;
    humanLoopName: string;
}
export declare class StartHumanLoopRequest extends SpeakeasyBase {
    headers: StartHumanLoopHeaders;
    request: StartHumanLoopRequestBody;
}
export declare class StartHumanLoopResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    serviceQuotaExceededException?: any;
    startHumanLoopResponse?: shared.StartHumanLoopResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
