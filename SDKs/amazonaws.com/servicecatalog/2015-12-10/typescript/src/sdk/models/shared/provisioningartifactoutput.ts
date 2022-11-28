import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProvisioningArtifactOutput
/** 
 * Provisioning artifact output.
**/
export class ProvisioningArtifactOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;
}
