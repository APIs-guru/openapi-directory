import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartSessionXAmzTargetEnum {
    AmazonSsmStartSession = "AmazonSSM.StartSession"
}
export declare class StartSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartSessionXAmzTargetEnum;
}
export declare class StartSessionRequest extends SpeakeasyBase {
    headers: StartSessionHeaders;
    request: shared.StartSessionRequest;
}
export declare class StartSessionResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidDocument?: any;
    startSessionResponse?: shared.StartSessionResponse;
    statusCode: number;
    targetNotConnected?: any;
}
