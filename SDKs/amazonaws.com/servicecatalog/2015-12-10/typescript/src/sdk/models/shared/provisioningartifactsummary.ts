import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProvisioningArtifactSummary
/** 
 * Summary information about a provisioning artifact (also known as a version) for a product.
**/
export class ProvisioningArtifactSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactMetadata" })
  provisioningArtifactMetadata?: Map<string, string>;
}
