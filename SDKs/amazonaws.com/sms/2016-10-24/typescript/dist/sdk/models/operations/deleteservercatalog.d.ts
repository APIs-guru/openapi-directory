import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DeleteServerCatalogXAmzTargetEnum {
    AwsServerMigrationServiceV20161024DeleteServerCatalog = "AWSServerMigrationService_V2016_10_24.DeleteServerCatalog"
}
export declare class DeleteServerCatalogHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteServerCatalogXAmzTargetEnum;
}
export declare class DeleteServerCatalogRequest extends SpeakeasyBase {
    headers: DeleteServerCatalogHeaders;
    request: Map<string, any>;
}
export declare class DeleteServerCatalogResponse extends SpeakeasyBase {
    contentType: string;
    deleteServerCatalogResponse?: Map<string, any>;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    unauthorizedOperationException?: any;
}
