import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UpdateRoutingControlStateEntry } from "./updateroutingcontrolstateentry";


export class UpdateRoutingControlStatesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=UpdateRoutingControlStateEntries", elemType: shared.UpdateRoutingControlStateEntry })
  updateRoutingControlStateEntries: UpdateRoutingControlStateEntry[];
}
