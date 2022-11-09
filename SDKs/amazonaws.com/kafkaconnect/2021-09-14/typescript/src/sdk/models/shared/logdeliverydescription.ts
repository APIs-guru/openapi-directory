import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkerLogDeliveryDescription } from "./workerlogdeliverydescription";


// LogDeliveryDescription
/** 
 * The description of the log delivery settings.
**/
export class LogDeliveryDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=workerLogDelivery" })
  workerLogDelivery?: WorkerLogDeliveryDescription;
}
