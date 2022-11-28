import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AquaConfigurationStatusEnum } from "./aquaconfigurationstatusenum";
import { AquaStatusEnum } from "./aquastatusenum";



// AquaConfiguration
/** 
 * The AQUA (Advanced Query Accelerator) configuration of the cluster.
**/
export class AquaConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aquaConfigurationStatus?: AquaConfigurationStatusEnum;

  @SpeakeasyMetadata()
  aquaStatus?: AquaStatusEnum;
}
