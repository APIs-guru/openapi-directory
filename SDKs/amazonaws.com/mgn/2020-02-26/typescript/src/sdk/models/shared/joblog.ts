import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobLogEventEnum } from "./joblogeventenum";
import { JobLogEventData } from "./joblogeventdata";



// JobLog
/** 
 * Job log.
**/
export class JobLog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event" })
  event?: JobLogEventEnum;

  @SpeakeasyMetadata({ data: "json, name=eventData" })
  eventData?: JobLogEventData;

  @SpeakeasyMetadata({ data: "json, name=logDateTime" })
  logDateTime?: string;
}
