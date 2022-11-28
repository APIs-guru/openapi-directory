import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HsmConfiguration } from "./hsmconfiguration";



// HsmConfigurationMessage
/** 
 * <p/>
**/
export class HsmConfigurationMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: HsmConfiguration })
  hsmConfigurations?: HsmConfiguration[];

  @SpeakeasyMetadata()
  marker?: string;
}
