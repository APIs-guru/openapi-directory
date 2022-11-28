import { SpeakeasyBase } from "../../../internal/utils";
import { ShipmentStateEnum } from "./shipmentstateenum";
export declare class UpdateJobShipmentStateRequest extends SpeakeasyBase {
    jobId: string;
    shipmentState: ShipmentStateEnum;
}
