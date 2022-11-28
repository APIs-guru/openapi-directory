import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCloudFormationStackRecordsXAmzTargetEnum {
    Lightsail20161128GetCloudFormationStackRecords = "Lightsail_20161128.GetCloudFormationStackRecords"
}
export declare class GetCloudFormationStackRecordsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCloudFormationStackRecordsXAmzTargetEnum;
}
export declare class GetCloudFormationStackRecordsRequest extends SpeakeasyBase {
    headers: GetCloudFormationStackRecordsHeaders;
    request: shared.GetCloudFormationStackRecordsRequest;
}
export declare class GetCloudFormationStackRecordsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getCloudFormationStackRecordsResult?: shared.GetCloudFormationStackRecordsResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
