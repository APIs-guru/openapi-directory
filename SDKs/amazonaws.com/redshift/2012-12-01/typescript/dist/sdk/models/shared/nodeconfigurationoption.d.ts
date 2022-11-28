import { SpeakeasyBase } from "../../../internal/utils";
import { ModeEnum } from "./modeenum";
/**
 * A list of node configurations.
**/
export declare class NodeConfigurationOption extends SpeakeasyBase {
    estimatedDiskUtilizationPercent?: number;
    mode?: ModeEnum;
    nodeType?: string;
    numberOfNodes?: number;
}
