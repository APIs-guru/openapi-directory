import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdatePrimaryRegionXAmzTargetEnum {
    TrentServiceUpdatePrimaryRegion = "TrentService.UpdatePrimaryRegion"
}
export declare class UpdatePrimaryRegionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePrimaryRegionXAmzTargetEnum;
}
export declare class UpdatePrimaryRegionRequest extends SpeakeasyBase {
    headers: UpdatePrimaryRegionHeaders;
    request: shared.UpdatePrimaryRegionRequest;
}
export declare class UpdatePrimaryRegionResponse extends SpeakeasyBase {
    contentType: string;
    disabledException?: any;
    invalidArnException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    notFoundException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
