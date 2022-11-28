import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SendTaskFailureXAmzTargetEnum {
    AwsStepFunctionsSendTaskFailure = "AWSStepFunctions.SendTaskFailure"
}
export declare class SendTaskFailureHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendTaskFailureXAmzTargetEnum;
}
export declare class SendTaskFailureRequest extends SpeakeasyBase {
    headers: SendTaskFailureHeaders;
    request: shared.SendTaskFailureInput;
}
export declare class SendTaskFailureResponse extends SpeakeasyBase {
    contentType: string;
    invalidToken?: any;
    sendTaskFailureOutput?: Map<string, any>;
    statusCode: number;
    taskDoesNotExist?: any;
    taskTimedOut?: any;
}
