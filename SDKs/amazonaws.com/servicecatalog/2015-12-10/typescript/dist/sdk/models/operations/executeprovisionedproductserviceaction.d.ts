import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ExecuteProvisionedProductServiceActionXAmzTargetEnum {
    Aws242ServiceCatalogServiceExecuteProvisionedProductServiceAction = "AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction"
}
export declare class ExecuteProvisionedProductServiceActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExecuteProvisionedProductServiceActionXAmzTargetEnum;
}
export declare class ExecuteProvisionedProductServiceActionRequest extends SpeakeasyBase {
    headers: ExecuteProvisionedProductServiceActionHeaders;
    request: shared.ExecuteProvisionedProductServiceActionInput;
}
export declare class ExecuteProvisionedProductServiceActionResponse extends SpeakeasyBase {
    contentType: string;
    executeProvisionedProductServiceActionOutput?: shared.ExecuteProvisionedProductServiceActionOutput;
    invalidParametersException?: any;
    invalidStateException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
