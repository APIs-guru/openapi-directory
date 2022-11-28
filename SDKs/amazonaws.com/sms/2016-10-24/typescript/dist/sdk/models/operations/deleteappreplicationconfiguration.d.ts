import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteAppReplicationConfigurationXAmzTargetEnum {
    AwsServerMigrationServiceV20161024DeleteAppReplicationConfiguration = "AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration"
}
export declare class DeleteAppReplicationConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAppReplicationConfigurationXAmzTargetEnum;
}
export declare class DeleteAppReplicationConfigurationRequest extends SpeakeasyBase {
    headers: DeleteAppReplicationConfigurationHeaders;
    request: shared.DeleteAppReplicationConfigurationRequest;
}
export declare class DeleteAppReplicationConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    deleteAppReplicationConfigurationResponse?: Map<string, any>;
    internalError?: any;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    unauthorizedOperationException?: any;
}
