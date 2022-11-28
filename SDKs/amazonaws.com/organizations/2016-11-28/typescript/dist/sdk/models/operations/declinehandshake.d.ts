import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeclineHandshakeXAmzTargetEnum {
    AwsOrganizationsV20161128DeclineHandshake = "AWSOrganizationsV20161128.DeclineHandshake"
}
export declare class DeclineHandshakeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeclineHandshakeXAmzTargetEnum;
}
export declare class DeclineHandshakeRequest extends SpeakeasyBase {
    headers: DeclineHandshakeHeaders;
    request: shared.DeclineHandshakeRequest;
}
export declare class DeclineHandshakeResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    concurrentModificationException?: any;
    contentType: string;
    declineHandshakeResponse?: shared.DeclineHandshakeResponse;
    handshakeAlreadyInStateException?: any;
    handshakeNotFoundException?: any;
    invalidHandshakeTransitionException?: any;
    invalidInputException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
