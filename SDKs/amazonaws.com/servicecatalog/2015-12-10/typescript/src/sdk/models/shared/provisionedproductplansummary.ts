import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisionedProductPlanTypeEnum } from "./provisionedproductplantypeenum";


// ProvisionedProductPlanSummary
/** 
 * Summary information about a plan.
**/
export class ProvisionedProductPlanSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=PlanId" })
  planId?: string;

  @Metadata({ data: "json, name=PlanName" })
  planName?: string;

  @Metadata({ data: "json, name=PlanType" })
  planType?: ProvisionedProductPlanTypeEnum;

  @Metadata({ data: "json, name=ProvisionProductId" })
  provisionProductId?: string;

  @Metadata({ data: "json, name=ProvisionProductName" })
  provisionProductName?: string;

  @Metadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId?: string;
}
