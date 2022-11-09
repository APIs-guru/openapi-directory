import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InputLogEvent } from "./inputlogevent";
export declare class PutLogEventsRequest extends SpeakeasyBase {
    logEvents: InputLogEvent[];
    logGroupName: string;
    logStreamName: string;
    sequenceToken?: string;
}
