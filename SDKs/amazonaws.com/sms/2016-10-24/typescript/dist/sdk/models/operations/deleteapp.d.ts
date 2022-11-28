import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteAppXAmzTargetEnum {
    AwsServerMigrationServiceV20161024DeleteApp = "AWSServerMigrationService_V2016_10_24.DeleteApp"
}
export declare class DeleteAppHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAppXAmzTargetEnum;
}
export declare class DeleteAppRequest extends SpeakeasyBase {
    headers: DeleteAppHeaders;
    request: shared.DeleteAppRequest;
}
export declare class DeleteAppResponse extends SpeakeasyBase {
    contentType: string;
    deleteAppResponse?: Map<string, any>;
    internalError?: any;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    unauthorizedOperationException?: any;
}
