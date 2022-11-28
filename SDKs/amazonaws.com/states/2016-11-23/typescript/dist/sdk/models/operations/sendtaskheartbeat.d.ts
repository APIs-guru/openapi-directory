import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SendTaskHeartbeatXAmzTargetEnum {
    AwsStepFunctionsSendTaskHeartbeat = "AWSStepFunctions.SendTaskHeartbeat"
}
export declare class SendTaskHeartbeatHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendTaskHeartbeatXAmzTargetEnum;
}
export declare class SendTaskHeartbeatRequest extends SpeakeasyBase {
    headers: SendTaskHeartbeatHeaders;
    request: shared.SendTaskHeartbeatInput;
}
export declare class SendTaskHeartbeatResponse extends SpeakeasyBase {
    contentType: string;
    invalidToken?: any;
    sendTaskHeartbeatOutput?: Map<string, any>;
    statusCode: number;
    taskDoesNotExist?: any;
    taskTimedOut?: any;
}
