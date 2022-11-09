import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisioningArtifactGuidanceEnum } from "./provisioningartifactguidanceenum";
import { ProvisioningArtifactTypeEnum } from "./provisioningartifacttypeenum";


// ProvisioningArtifactDetail
/** 
 * Information about a provisioning artifact (also known as a version) for a product.
**/
export class ProvisioningArtifactDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=Active" })
  active?: boolean;

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

  @Metadata({ data: "json, name=Type" })
  type?: ProvisioningArtifactTypeEnum;
}
