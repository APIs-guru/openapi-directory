import { SpeakeasyBase } from "../../../internal/utils";
import { RoutingControlStateEnum } from "./routingcontrolstateenum";
export declare class UpdateRoutingControlStateRequest extends SpeakeasyBase {
    routingControlArn: string;
    routingControlState: RoutingControlStateEnum;
}
