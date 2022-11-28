import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModeEnum } from "./modeenum";



// NodeConfigurationOption
/** 
 * A list of node configurations.
**/
export class NodeConfigurationOption extends SpeakeasyBase {
  @SpeakeasyMetadata()
  estimatedDiskUtilizationPercent?: number;

  @SpeakeasyMetadata()
  mode?: ModeEnum;

  @SpeakeasyMetadata()
  nodeType?: string;

  @SpeakeasyMetadata()
  numberOfNodes?: number;
}
