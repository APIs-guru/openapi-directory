import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateProvisionedProductPlanOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=PlanId" })
  planId?: string;

  @Metadata({ data: "json, name=PlanName" })
  planName?: string;

  @Metadata({ data: "json, name=ProvisionProductId" })
  provisionProductId?: string;

  @Metadata({ data: "json, name=ProvisionedProductName" })
  provisionedProductName?: string;

  @Metadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId?: string;
}
