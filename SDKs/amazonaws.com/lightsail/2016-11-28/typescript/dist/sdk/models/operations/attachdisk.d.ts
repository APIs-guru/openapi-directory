import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AttachDiskXAmzTargetEnum {
    Lightsail20161128AttachDisk = "Lightsail_20161128.AttachDisk"
}
export declare class AttachDiskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AttachDiskXAmzTargetEnum;
}
export declare class AttachDiskRequest extends SpeakeasyBase {
    headers: AttachDiskHeaders;
    request: shared.AttachDiskRequest;
}
export declare class AttachDiskResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    attachDiskResult?: shared.AttachDiskResult;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
