import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstancePortState } from "./instanceportstate";



export class GetInstancePortStatesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portStates", elemType: InstancePortState })
  portStates?: InstancePortState[];
}
