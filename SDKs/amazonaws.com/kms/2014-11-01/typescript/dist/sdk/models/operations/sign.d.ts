import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SignXAmzTargetEnum {
    TrentServiceSign = "TrentService.Sign"
}
export declare class SignHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SignXAmzTargetEnum;
}
export declare class SignRequest extends SpeakeasyBase {
    headers: SignHeaders;
    request: shared.SignRequest;
}
export declare class SignResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    disabledException?: any;
    invalidGrantTokenException?: any;
    invalidKeyUsageException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    keyUnavailableException?: any;
    notFoundException?: any;
    signResponse?: shared.SignResponse;
    statusCode: number;
}
