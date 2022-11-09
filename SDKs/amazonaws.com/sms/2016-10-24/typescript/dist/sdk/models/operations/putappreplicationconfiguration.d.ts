import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum PutAppReplicationConfigurationXAmzTargetEnum {
    AwsServerMigrationServiceV20161024PutAppReplicationConfiguration = "AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration"
}
export declare class PutAppReplicationConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutAppReplicationConfigurationXAmzTargetEnum;
}
export declare class PutAppReplicationConfigurationRequest extends SpeakeasyBase {
    headers: PutAppReplicationConfigurationHeaders;
    request: shared.PutAppReplicationConfigurationRequest;
}
export declare class PutAppReplicationConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    internalError?: any;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    putAppReplicationConfigurationResponse?: Map<string, any>;
    statusCode: number;
    unauthorizedOperationException?: any;
}
