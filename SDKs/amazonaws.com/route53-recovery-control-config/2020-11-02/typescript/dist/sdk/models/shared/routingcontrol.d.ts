import { SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";
/**
 * A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control traffic routing.
**/
export declare class RoutingControl extends SpeakeasyBase {
    controlPanelArn?: string;
    name?: string;
    routingControlArn?: string;
    status?: StatusEnum;
}
