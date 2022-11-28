import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RetireGrantXAmzTargetEnum {
    TrentServiceRetireGrant = "TrentService.RetireGrant"
}
export declare class RetireGrantHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RetireGrantXAmzTargetEnum;
}
export declare class RetireGrantRequest extends SpeakeasyBase {
    headers: RetireGrantHeaders;
    request: shared.RetireGrantRequest;
}
export declare class RetireGrantResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    invalidArnException?: any;
    invalidGrantIdException?: any;
    invalidGrantTokenException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    notFoundException?: any;
    statusCode: number;
}
