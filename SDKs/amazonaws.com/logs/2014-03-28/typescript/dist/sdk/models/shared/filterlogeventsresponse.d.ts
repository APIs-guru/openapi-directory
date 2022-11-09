import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FilteredLogEvent } from "./filteredlogevent";
import { SearchedLogStream } from "./searchedlogstream";
export declare class FilterLogEventsResponse extends SpeakeasyBase {
    events?: FilteredLogEvent[];
    nextToken?: string;
    searchedLogStreams?: SearchedLogStream[];
}
