import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ControlPanel } from "./controlpanel";


export class ListControlPanelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ControlPanels", elemType: shared.ControlPanel })
  controlPanels?: ControlPanel[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
