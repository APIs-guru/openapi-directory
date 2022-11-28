import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ControlPanel } from "./controlpanel";



export class CreateControlPanelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ControlPanel" })
  controlPanel?: ControlPanel;
}
