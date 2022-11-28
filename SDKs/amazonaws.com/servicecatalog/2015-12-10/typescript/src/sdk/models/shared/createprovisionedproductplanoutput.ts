import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateProvisionedProductPlanOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PlanId" })
  planId?: string;

  @SpeakeasyMetadata({ data: "json, name=PlanName" })
  planName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionProductId" })
  provisionProductId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedProductName" })
  provisionedProductName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId?: string;
}
