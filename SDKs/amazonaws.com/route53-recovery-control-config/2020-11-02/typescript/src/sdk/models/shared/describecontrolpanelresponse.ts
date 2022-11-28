import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ControlPanel } from "./controlpanel";



export class DescribeControlPanelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ControlPanel" })
  controlPanel?: ControlPanel;
}
