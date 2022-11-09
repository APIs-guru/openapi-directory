import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScrapeResult
/** 
 * The result of a scrape request
**/
export class ScrapeResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=items" })
  items?: Map<string, any>[];

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
