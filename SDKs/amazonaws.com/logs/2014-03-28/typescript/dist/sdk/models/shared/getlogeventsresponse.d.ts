import { SpeakeasyBase } from "../../../internal/utils/utils";
import { OutputLogEvent } from "./outputlogevent";
export declare class GetLogEventsResponse extends SpeakeasyBase {
    events?: OutputLogEvent[];
    nextBackwardToken?: string;
    nextForwardToken?: string;
}
