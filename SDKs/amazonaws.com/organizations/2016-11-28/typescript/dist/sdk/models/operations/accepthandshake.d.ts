import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AcceptHandshakeXAmzTargetEnum {
    AwsOrganizationsV20161128AcceptHandshake = "AWSOrganizationsV20161128.AcceptHandshake"
}
export declare class AcceptHandshakeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AcceptHandshakeXAmzTargetEnum;
}
export declare class AcceptHandshakeRequest extends SpeakeasyBase {
    headers: AcceptHandshakeHeaders;
    request: shared.AcceptHandshakeRequest;
}
export declare class AcceptHandshakeResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    acceptHandshakeResponse?: shared.AcceptHandshakeResponse;
    accessDeniedException?: any;
    accessDeniedForDependencyException?: any;
    concurrentModificationException?: any;
    contentType: string;
    handshakeAlreadyInStateException?: any;
    handshakeConstraintViolationException?: any;
    handshakeNotFoundException?: any;
    invalidHandshakeTransitionException?: any;
    invalidInputException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
