import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShipmentStateEnum } from "./shipmentstateenum";



export class UpdateJobShipmentStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "json, name=ShipmentState" })
  shipmentState: ShipmentStateEnum;
}
