import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisionedProductPlanTypeEnum } from "./provisionedproductplantypeenum";
/**
 * Summary information about a plan.
**/
export declare class ProvisionedProductPlanSummary extends SpeakeasyBase {
    planId?: string;
    planName?: string;
    planType?: ProvisionedProductPlanTypeEnum;
    provisionProductId?: string;
    provisionProductName?: string;
    provisioningArtifactId?: string;
}
