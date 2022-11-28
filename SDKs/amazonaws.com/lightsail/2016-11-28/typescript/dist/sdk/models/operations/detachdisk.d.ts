import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DetachDiskXAmzTargetEnum {
    Lightsail20161128DetachDisk = "Lightsail_20161128.DetachDisk"
}
export declare class DetachDiskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetachDiskXAmzTargetEnum;
}
export declare class DetachDiskRequest extends SpeakeasyBase {
    headers: DetachDiskHeaders;
    request: shared.DetachDiskRequest;
}
export declare class DetachDiskResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    detachDiskResult?: shared.DetachDiskResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
