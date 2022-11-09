import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FilteredLogEvent } from "./filteredlogevent";
import { SearchedLogStream } from "./searchedlogstream";


export class FilterLogEventsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=events", elemType: shared.FilteredLogEvent })
  events?: FilteredLogEvent[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=searchedLogStreams", elemType: shared.SearchedLogStream })
  searchedLogStreams?: SearchedLogStream[];
}
