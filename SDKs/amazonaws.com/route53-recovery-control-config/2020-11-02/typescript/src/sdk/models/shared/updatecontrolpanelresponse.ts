import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ControlPanel } from "./controlpanel";


export class UpdateControlPanelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ControlPanel" })
  controlPanel?: ControlPanel;
}
