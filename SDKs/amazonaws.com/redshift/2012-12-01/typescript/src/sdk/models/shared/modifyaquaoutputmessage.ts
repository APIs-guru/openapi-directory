import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AquaConfiguration } from "./aquaconfiguration";



export class ModifyAquaOutputMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aquaConfiguration?: AquaConfiguration;
}
