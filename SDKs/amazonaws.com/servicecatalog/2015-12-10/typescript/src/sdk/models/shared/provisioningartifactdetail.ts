import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningArtifactGuidanceEnum } from "./provisioningartifactguidanceenum";
import { ProvisioningArtifactTypeEnum } from "./provisioningartifacttypeenum";



// ProvisioningArtifactDetail
/** 
 * Information about a provisioning artifact (also known as a version) for a product.
**/
export class ProvisioningArtifactDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Active" })
  active?: boolean;

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

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ProvisioningArtifactTypeEnum;
}
