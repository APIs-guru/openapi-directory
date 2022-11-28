import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAppReplicationConfigurationXAmzTargetEnum {
    AwsServerMigrationServiceV20161024GetAppReplicationConfiguration = "AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration"
}
export declare class GetAppReplicationConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAppReplicationConfigurationXAmzTargetEnum;
}
export declare class GetAppReplicationConfigurationRequest extends SpeakeasyBase {
    headers: GetAppReplicationConfigurationHeaders;
    request: shared.GetAppReplicationConfigurationRequest;
}
export declare class GetAppReplicationConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    getAppReplicationConfigurationResponse?: shared.GetAppReplicationConfigurationResponse;
    internalError?: any;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    unauthorizedOperationException?: any;
}
