import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkerLogDeliveryDescription } from "./workerlogdeliverydescription";



// LogDeliveryDescription
/** 
 * The description of the log delivery settings.
**/
export class LogDeliveryDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=workerLogDelivery" })
  workerLogDelivery?: WorkerLogDeliveryDescription;
}
