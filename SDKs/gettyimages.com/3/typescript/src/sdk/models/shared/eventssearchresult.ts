import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Event } from "./event";


export class EventsSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=events", elemType: shared.Event })
  events?: Event[];

  @Metadata({ data: "json, name=result_count" })
  resultCount?: number;
}
