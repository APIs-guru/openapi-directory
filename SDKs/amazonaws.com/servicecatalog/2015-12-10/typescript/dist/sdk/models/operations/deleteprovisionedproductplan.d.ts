import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteProvisionedProductPlanXAmzTargetEnum {
    Aws242ServiceCatalogServiceDeleteProvisionedProductPlan = "AWS242ServiceCatalogService.DeleteProvisionedProductPlan"
}
export declare class DeleteProvisionedProductPlanHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteProvisionedProductPlanXAmzTargetEnum;
}
export declare class DeleteProvisionedProductPlanRequest extends SpeakeasyBase {
    headers: DeleteProvisionedProductPlanHeaders;
    request: shared.DeleteProvisionedProductPlanInput;
}
export declare class DeleteProvisionedProductPlanResponse extends SpeakeasyBase {
    contentType: string;
    deleteProvisionedProductPlanOutput?: Map<string, any>;
    invalidParametersException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
