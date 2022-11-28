import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateRoutingControlStateEntry } from "./updateroutingcontrolstateentry";



export class UpdateRoutingControlStatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UpdateRoutingControlStateEntries", elemType: UpdateRoutingControlStateEntry })
  updateRoutingControlStateEntries: UpdateRoutingControlStateEntry[];
}
