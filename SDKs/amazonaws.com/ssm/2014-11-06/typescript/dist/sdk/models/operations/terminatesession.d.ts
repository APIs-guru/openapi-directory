import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TerminateSessionXAmzTargetEnum {
    AmazonSsmTerminateSession = "AmazonSSM.TerminateSession"
}
export declare class TerminateSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TerminateSessionXAmzTargetEnum;
}
export declare class TerminateSessionRequest extends SpeakeasyBase {
    headers: TerminateSessionHeaders;
    request: shared.TerminateSessionRequest;
}
export declare class TerminateSessionResponse extends SpeakeasyBase {
    contentType: string;
    doesNotExistException?: any;
    internalServerError?: any;
    statusCode: number;
    terminateSessionResponse?: shared.TerminateSessionResponse;
}
