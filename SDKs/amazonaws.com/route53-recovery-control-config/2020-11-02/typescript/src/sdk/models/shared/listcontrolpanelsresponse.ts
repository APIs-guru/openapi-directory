import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ControlPanel } from "./controlpanel";



export class ListControlPanelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ControlPanels", elemType: ControlPanel })
  controlPanels?: ControlPanel[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
