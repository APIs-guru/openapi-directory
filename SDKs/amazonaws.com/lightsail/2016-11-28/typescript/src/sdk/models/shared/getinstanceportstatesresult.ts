import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstancePortState } from "./instanceportstate";


export class GetInstancePortStatesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=portStates", elemType: shared.InstancePortState })
  portStates?: InstancePortState[];
}
