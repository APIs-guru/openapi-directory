import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisioningArtifactGuidanceEnum } from "./provisioningartifactguidanceenum";


// ProvisioningArtifact
/** 
 * Information about a provisioning artifact. A provisioning artifact is also known as a product version.
**/
export class ProvisioningArtifact extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Guidance" })
  guidance?: ProvisioningArtifactGuidanceEnum;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
