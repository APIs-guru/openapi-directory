import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";



export class EventsSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=events", elemType: Event })
  events?: Event[];

  @SpeakeasyMetadata({ data: "json, name=result_count" })
  resultCount?: number;
}
