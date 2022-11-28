import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningArtifactGuidanceEnum } from "./provisioningartifactguidanceenum";



// ProvisioningArtifact
/** 
 * Information about a provisioning artifact. A provisioning artifact is also known as a product version.
**/
export class ProvisioningArtifact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Guidance" })
  guidance?: ProvisioningArtifactGuidanceEnum;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
