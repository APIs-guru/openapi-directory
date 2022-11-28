import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HsmConfiguration } from "./hsmconfiguration";



export class CreateHsmConfigurationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  hsmConfiguration?: HsmConfiguration;
}
