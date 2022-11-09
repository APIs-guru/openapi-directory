import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ShipmentStateEnum } from "./shipmentstateenum";


export class UpdateJobShipmentStateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId: string;

  @Metadata({ data: "json, name=ShipmentState" })
  shipmentState: ShipmentStateEnum;
}
