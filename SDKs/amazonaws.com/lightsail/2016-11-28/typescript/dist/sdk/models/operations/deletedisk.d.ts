import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteDiskXAmzTargetEnum {
    Lightsail20161128DeleteDisk = "Lightsail_20161128.DeleteDisk"
}
export declare class DeleteDiskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDiskXAmzTargetEnum;
}
export declare class DeleteDiskRequest extends SpeakeasyBase {
    headers: DeleteDiskHeaders;
    request: shared.DeleteDiskRequest;
}
export declare class DeleteDiskResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    deleteDiskResult?: shared.DeleteDiskResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
