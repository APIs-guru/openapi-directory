import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProvisioningArtifactSummary
/** 
 * Summary information about a provisioning artifact (also known as a version) for a product.
**/
export class ProvisioningArtifactSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ProvisioningArtifactMetadata" })
  provisioningArtifactMetadata?: Map<string, string>;
}
