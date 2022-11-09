import { SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusEnum } from "./statusenum";
/**
 * A control panel represents a group of routing controls that can be changed together in a single transaction.
**/
export declare class ControlPanel extends SpeakeasyBase {
    clusterArn?: string;
    controlPanelArn?: string;
    defaultControlPanel?: boolean;
    name?: string;
    routingControlCount?: number;
    status?: StatusEnum;
}
