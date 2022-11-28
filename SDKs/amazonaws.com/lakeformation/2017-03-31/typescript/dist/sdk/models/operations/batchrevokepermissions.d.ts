import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchRevokePermissionsXAmzTargetEnum {
    AwsLakeFormationBatchRevokePermissions = "AWSLakeFormation.BatchRevokePermissions"
}
export declare class BatchRevokePermissionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchRevokePermissionsXAmzTargetEnum;
}
export declare class BatchRevokePermissionsRequest extends SpeakeasyBase {
    headers: BatchRevokePermissionsHeaders;
    request: shared.BatchRevokePermissionsRequest;
}
export declare class BatchRevokePermissionsResponse extends SpeakeasyBase {
    batchRevokePermissionsResponse?: shared.BatchRevokePermissionsResponse;
    contentType: string;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
