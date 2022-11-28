import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDiskXAmzTargetEnum {
    Lightsail20161128CreateDisk = "Lightsail_20161128.CreateDisk"
}
export declare class CreateDiskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDiskXAmzTargetEnum;
}
export declare class CreateDiskRequest extends SpeakeasyBase {
    headers: CreateDiskHeaders;
    request: shared.CreateDiskRequest;
}
export declare class CreateDiskResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    createDiskResult?: shared.CreateDiskResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
