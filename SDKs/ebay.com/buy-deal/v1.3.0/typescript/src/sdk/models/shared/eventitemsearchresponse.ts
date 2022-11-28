import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventItem } from "./eventitem";



// EventItemSearchResponse
/** 
 * The result set for the event item search.
**/
export class EventItemSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventItems", elemType: EventItem })
  eventItems?: EventItem[];

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
