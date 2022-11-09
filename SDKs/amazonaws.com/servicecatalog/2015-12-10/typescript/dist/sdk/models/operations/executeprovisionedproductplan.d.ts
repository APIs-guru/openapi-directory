import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ExecuteProvisionedProductPlanXAmzTargetEnum {
    Aws242ServiceCatalogServiceExecuteProvisionedProductPlan = "AWS242ServiceCatalogService.ExecuteProvisionedProductPlan"
}
export declare class ExecuteProvisionedProductPlanHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExecuteProvisionedProductPlanXAmzTargetEnum;
}
export declare class ExecuteProvisionedProductPlanRequest extends SpeakeasyBase {
    headers: ExecuteProvisionedProductPlanHeaders;
    request: shared.ExecuteProvisionedProductPlanInput;
}
export declare class ExecuteProvisionedProductPlanResponse extends SpeakeasyBase {
    contentType: string;
    executeProvisionedProductPlanOutput?: shared.ExecuteProvisionedProductPlanOutput;
    invalidParametersException?: any;
    invalidStateException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
