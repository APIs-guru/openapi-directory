import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedProductPlanTypeEnum } from "./provisionedproductplantypeenum";



// ProvisionedProductPlanSummary
/** 
 * Summary information about a plan.
**/
export class ProvisionedProductPlanSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PlanId" })
  planId?: string;

  @SpeakeasyMetadata({ data: "json, name=PlanName" })
  planName?: string;

  @SpeakeasyMetadata({ data: "json, name=PlanType" })
  planType?: ProvisionedProductPlanTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ProvisionProductId" })
  provisionProductId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionProductName" })
  provisionProductName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId?: string;
}
