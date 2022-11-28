import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SendCommandXAmzTargetEnum {
    AmazonSsmSendCommand = "AmazonSSM.SendCommand"
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
    contentType: string;
    duplicateInstanceId?: any;
    internalServerError?: any;
    invalidDocument?: any;
    invalidDocumentVersion?: any;
    invalidInstanceId?: any;
    invalidNotificationConfig?: any;
    invalidOutputFolder?: any;
    invalidParameters?: any;
    invalidRole?: any;
    maxDocumentSizeExceeded?: any;
    sendCommandResult?: shared.SendCommandResult;
    statusCode: number;
    unsupportedPlatformType?: any;
}
