import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobLogEventEnum } from "./joblogeventenum";
import { JobLogEventData } from "./joblogeventdata";


// JobLog
/** 
 * Job log.
**/
export class JobLog extends SpeakeasyBase {
  @Metadata({ data: "json, name=event" })
  event?: JobLogEventEnum;

  @Metadata({ data: "json, name=eventData" })
  eventData?: JobLogEventData;

  @Metadata({ data: "json, name=logDateTime" })
  logDateTime?: string;
}
