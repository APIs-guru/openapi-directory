import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ControlPanel } from "./controlpanel";


export class CreateControlPanelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ControlPanel" })
  controlPanel?: ControlPanel;
}
