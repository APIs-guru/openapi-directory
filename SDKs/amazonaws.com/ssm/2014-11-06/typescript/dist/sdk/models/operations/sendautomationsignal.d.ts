import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SendAutomationSignalXAmzTargetEnum {
    AmazonSsmSendAutomationSignal = "AmazonSSM.SendAutomationSignal"
}
export declare class SendAutomationSignalHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendAutomationSignalXAmzTargetEnum;
}
export declare class SendAutomationSignalRequest extends SpeakeasyBase {
    headers: SendAutomationSignalHeaders;
    request: shared.SendAutomationSignalRequest;
}
export declare class SendAutomationSignalResponse extends SpeakeasyBase {
    automationExecutionNotFoundException?: any;
    automationStepNotFoundException?: any;
    contentType: string;
    internalServerError?: any;
    invalidAutomationSignalException?: any;
    sendAutomationSignalResult?: Map<string, any>;
    statusCode: number;
}
