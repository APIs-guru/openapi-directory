import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RejectedLogEventsInfo } from "./rejectedlogeventsinfo";
export declare class PutLogEventsResponse extends SpeakeasyBase {
    nextSequenceToken?: string;
    rejectedLogEventsInfo?: RejectedLogEventsInfo;
}
