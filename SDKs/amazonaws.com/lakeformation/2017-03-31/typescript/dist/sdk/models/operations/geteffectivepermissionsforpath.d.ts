import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEffectivePermissionsForPathQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetEffectivePermissionsForPathXAmzTargetEnum {
    AwsLakeFormationGetEffectivePermissionsForPath = "AWSLakeFormation.GetEffectivePermissionsForPath"
}
export declare class GetEffectivePermissionsForPathHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEffectivePermissionsForPathXAmzTargetEnum;
}
export declare class GetEffectivePermissionsForPathRequest extends SpeakeasyBase {
    queryParams: GetEffectivePermissionsForPathQueryParams;
    headers: GetEffectivePermissionsForPathHeaders;
    request: shared.GetEffectivePermissionsForPathRequest;
}
export declare class GetEffectivePermissionsForPathResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getEffectivePermissionsForPathResponse?: shared.GetEffectivePermissionsForPathResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
