import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SendContactMethodVerificationXAmzTargetEnum {
    Lightsail20161128SendContactMethodVerification = "Lightsail_20161128.SendContactMethodVerification"
}
export declare class SendContactMethodVerificationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendContactMethodVerificationXAmzTargetEnum;
}
export declare class SendContactMethodVerificationRequest extends SpeakeasyBase {
    headers: SendContactMethodVerificationHeaders;
    request: shared.SendContactMethodVerificationRequest;
}
export declare class SendContactMethodVerificationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    sendContactMethodVerificationResult?: shared.SendContactMethodVerificationResult;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
