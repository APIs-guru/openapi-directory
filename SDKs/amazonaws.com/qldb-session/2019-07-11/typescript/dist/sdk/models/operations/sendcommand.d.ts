import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum SendCommandXAmzTargetEnum {
    QldbSessionSendCommand = "QLDBSession.SendCommand"
}
export declare class SendCommandHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendCommandXAmzTargetEnum;
}
export declare class SendCommandRequest extends SpeakeasyBase {
    headers: SendCommandHeaders;
    request: shared.SendCommandRequest;
}
export declare class SendCommandResponse extends SpeakeasyBase {
    badRequestException?: any;
    capacityExceededException?: any;
    contentType: string;
    invalidSessionException?: any;
    limitExceededException?: any;
    occConflictException?: any;
    rateExceededException?: any;
    sendCommandResult?: shared.SendCommandResult;
    statusCode: number;
}
