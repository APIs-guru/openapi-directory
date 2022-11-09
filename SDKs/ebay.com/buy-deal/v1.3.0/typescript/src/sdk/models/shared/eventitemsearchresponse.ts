import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventItem } from "./eventitem";


// EventItemSearchResponse
/** 
 * The result set for the event item search.
**/
export class EventItemSearchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventItems", elemType: shared.EventItem })
  eventItems?: EventItem[];

  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=prev" })
  prev?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
