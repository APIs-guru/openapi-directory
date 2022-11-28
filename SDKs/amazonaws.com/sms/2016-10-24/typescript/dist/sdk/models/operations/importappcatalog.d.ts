import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ImportAppCatalogXAmzTargetEnum {
    AwsServerMigrationServiceV20161024ImportAppCatalog = "AWSServerMigrationService_V2016_10_24.ImportAppCatalog"
}
export declare class ImportAppCatalogHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportAppCatalogXAmzTargetEnum;
}
export declare class ImportAppCatalogRequest extends SpeakeasyBase {
    headers: ImportAppCatalogHeaders;
    request: shared.ImportAppCatalogRequest;
}
export declare class ImportAppCatalogResponse extends SpeakeasyBase {
    contentType: string;
    importAppCatalogResponse?: Map<string, any>;
    internalError?: any;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    unauthorizedOperationException?: any;
}
