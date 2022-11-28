import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RevokeGrantXAmzTargetEnum {
    TrentServiceRevokeGrant = "TrentService.RevokeGrant"
}
export declare class RevokeGrantHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RevokeGrantXAmzTargetEnum;
}
export declare class RevokeGrantRequest extends SpeakeasyBase {
    headers: RevokeGrantHeaders;
    request: shared.RevokeGrantRequest;
}
export declare class RevokeGrantResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    invalidArnException?: any;
    invalidGrantIdException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    notFoundException?: any;
    statusCode: number;
}
