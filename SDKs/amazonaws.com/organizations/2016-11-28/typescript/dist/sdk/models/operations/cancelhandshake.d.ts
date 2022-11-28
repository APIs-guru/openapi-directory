import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CancelHandshakeXAmzTargetEnum {
    AwsOrganizationsV20161128CancelHandshake = "AWSOrganizationsV20161128.CancelHandshake"
}
export declare class CancelHandshakeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelHandshakeXAmzTargetEnum;
}
export declare class CancelHandshakeRequest extends SpeakeasyBase {
    headers: CancelHandshakeHeaders;
    request: shared.CancelHandshakeRequest;
}
export declare class CancelHandshakeResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    cancelHandshakeResponse?: shared.CancelHandshakeResponse;
    concurrentModificationException?: any;
    contentType: string;
    handshakeAlreadyInStateException?: any;
    handshakeNotFoundException?: any;
    invalidHandshakeTransitionException?: any;
    invalidInputException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
