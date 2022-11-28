import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateCloudFormationStackXAmzTargetEnum {
    Lightsail20161128CreateCloudFormationStack = "Lightsail_20161128.CreateCloudFormationStack"
}
export declare class CreateCloudFormationStackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCloudFormationStackXAmzTargetEnum;
}
export declare class CreateCloudFormationStackRequest extends SpeakeasyBase {
    headers: CreateCloudFormationStackHeaders;
    request: shared.CreateCloudFormationStackRequest;
}
export declare class CreateCloudFormationStackResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    createCloudFormationStackResult?: shared.CreateCloudFormationStackResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
