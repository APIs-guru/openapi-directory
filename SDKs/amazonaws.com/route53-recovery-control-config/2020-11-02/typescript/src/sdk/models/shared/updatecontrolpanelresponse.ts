import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ControlPanel } from "./controlpanel";



export class UpdateControlPanelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ControlPanel" })
  controlPanel?: ControlPanel;
}
