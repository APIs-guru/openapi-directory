import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateProvisionedProductPlanXAmzTargetEnum {
    Aws242ServiceCatalogServiceCreateProvisionedProductPlan = "AWS242ServiceCatalogService.CreateProvisionedProductPlan"
}
export declare class CreateProvisionedProductPlanHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateProvisionedProductPlanXAmzTargetEnum;
}
export declare class CreateProvisionedProductPlanRequest extends SpeakeasyBase {
    headers: CreateProvisionedProductPlanHeaders;
    request: shared.CreateProvisionedProductPlanInput;
}
export declare class CreateProvisionedProductPlanResponse extends SpeakeasyBase {
    contentType: string;
    createProvisionedProductPlanOutput?: shared.CreateProvisionedProductPlanOutput;
    invalidParametersException?: any;
    invalidStateException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
