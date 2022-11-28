import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Pagination
/** 
 * The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.
 * 
**/
export class Pagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount?: number;
}
