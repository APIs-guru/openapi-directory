import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilteredLogEvent } from "./filteredlogevent";
import { SearchedLogStream } from "./searchedlogstream";



export class FilterLogEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=events", elemType: FilteredLogEvent })
  events?: FilteredLogEvent[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=searchedLogStreams", elemType: SearchedLogStream })
  searchedLogStreams?: SearchedLogStream[];
}
