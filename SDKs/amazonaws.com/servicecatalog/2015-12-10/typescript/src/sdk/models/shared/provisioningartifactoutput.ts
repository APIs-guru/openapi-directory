import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProvisioningArtifactOutput
/** 
 * Provisioning artifact output.
**/
export class ProvisioningArtifactOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Key" })
  key?: string;
}
