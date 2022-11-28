import { SpeakeasyBase } from "../../../internal/utils";
import { ControlPanel } from "./controlpanel";
export declare class ListControlPanelsResponse extends SpeakeasyBase {
    controlPanels?: ControlPanel[];
    nextToken?: string;
}
