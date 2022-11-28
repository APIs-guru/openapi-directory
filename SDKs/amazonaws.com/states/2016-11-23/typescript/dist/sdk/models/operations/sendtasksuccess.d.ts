import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SendTaskSuccessXAmzTargetEnum {
    AwsStepFunctionsSendTaskSuccess = "AWSStepFunctions.SendTaskSuccess"
}
export declare class SendTaskSuccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendTaskSuccessXAmzTargetEnum;
}
export declare class SendTaskSuccessRequest extends SpeakeasyBase {
    headers: SendTaskSuccessHeaders;
    request: shared.SendTaskSuccessInput;
}
export declare class SendTaskSuccessResponse extends SpeakeasyBase {
    contentType: string;
    invalidOutput?: any;
    invalidToken?: any;
    sendTaskSuccessOutput?: Map<string, any>;
    statusCode: number;
    taskDoesNotExist?: any;
    taskTimedOut?: any;
}
