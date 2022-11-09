import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ControlPanel } from "./controlpanel";
export declare class ListControlPanelsResponse extends SpeakeasyBase {
    controlPanels?: ControlPanel[];
    nextToken?: string;
}
