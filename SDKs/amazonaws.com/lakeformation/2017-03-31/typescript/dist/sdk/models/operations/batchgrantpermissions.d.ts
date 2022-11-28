import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchGrantPermissionsXAmzTargetEnum {
    AwsLakeFormationBatchGrantPermissions = "AWSLakeFormation.BatchGrantPermissions"
}
export declare class BatchGrantPermissionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGrantPermissionsXAmzTargetEnum;
}
export declare class BatchGrantPermissionsRequest extends SpeakeasyBase {
    headers: BatchGrantPermissionsHeaders;
    request: shared.BatchGrantPermissionsRequest;
}
export declare class BatchGrantPermissionsResponse extends SpeakeasyBase {
    batchGrantPermissionsResponse?: shared.BatchGrantPermissionsResponse;
    contentType: string;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
