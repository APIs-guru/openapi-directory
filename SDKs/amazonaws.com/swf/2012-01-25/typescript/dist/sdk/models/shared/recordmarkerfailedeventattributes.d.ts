import { SpeakeasyBase } from "../../../internal/utils";
import { RecordMarkerFailedCauseEnum } from "./recordmarkerfailedcauseenum";
/**
 * Provides the details of the <code>RecordMarkerFailed</code> event.
**/
export declare class RecordMarkerFailedEventAttributes extends SpeakeasyBase {
    cause: RecordMarkerFailedCauseEnum;
    decisionTaskCompletedEventId: number;
    markerName: string;
}
