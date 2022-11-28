import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateGrantXAmzTargetEnum {
    TrentServiceCreateGrant = "TrentService.CreateGrant"
}
export declare class CreateGrantHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateGrantXAmzTargetEnum;
}
export declare class CreateGrantRequest extends SpeakeasyBase {
    headers: CreateGrantHeaders;
    request: shared.CreateGrantRequest;
}
export declare class CreateGrantResponse extends SpeakeasyBase {
    contentType: string;
    createGrantResponse?: shared.CreateGrantResponse;
    dependencyTimeoutException?: any;
    disabledException?: any;
    invalidArnException?: any;
    invalidGrantTokenException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
