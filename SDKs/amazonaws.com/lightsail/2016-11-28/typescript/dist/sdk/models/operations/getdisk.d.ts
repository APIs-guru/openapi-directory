import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDiskXAmzTargetEnum {
    Lightsail20161128GetDisk = "Lightsail_20161128.GetDisk"
}
export declare class GetDiskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDiskXAmzTargetEnum;
}
export declare class GetDiskRequest extends SpeakeasyBase {
    headers: GetDiskHeaders;
    request: shared.GetDiskRequest;
}
export declare class GetDiskResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getDiskResult?: shared.GetDiskResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
