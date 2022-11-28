import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateKeyDescriptionXAmzTargetEnum {
    TrentServiceUpdateKeyDescription = "TrentService.UpdateKeyDescription"
}
export declare class UpdateKeyDescriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateKeyDescriptionXAmzTargetEnum;
}
export declare class UpdateKeyDescriptionRequest extends SpeakeasyBase {
    headers: UpdateKeyDescriptionHeaders;
    request: shared.UpdateKeyDescriptionRequest;
}
export declare class UpdateKeyDescriptionResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    invalidArnException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    notFoundException?: any;
    statusCode: number;
}
