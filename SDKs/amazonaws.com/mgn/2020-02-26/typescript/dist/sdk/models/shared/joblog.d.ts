import { SpeakeasyBase } from "../../../internal/utils";
import { JobLogEventEnum } from "./joblogeventenum";
import { JobLogEventData } from "./joblogeventdata";
/**
 * Job log.
**/
export declare class JobLog extends SpeakeasyBase {
    event?: JobLogEventEnum;
    eventData?: JobLogEventData;
    logDateTime?: string;
}
