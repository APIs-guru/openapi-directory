import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScrapeResult
/** 
 * The result of a scrape request
**/
export class ScrapeResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "json, name=items" })
  items?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
