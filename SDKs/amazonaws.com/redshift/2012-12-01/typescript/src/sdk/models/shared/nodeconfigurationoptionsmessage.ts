import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodeConfigurationOption } from "./nodeconfigurationoption";



export class NodeConfigurationOptionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: NodeConfigurationOption })
  nodeConfigurationOptionList?: NodeConfigurationOption[];
}
