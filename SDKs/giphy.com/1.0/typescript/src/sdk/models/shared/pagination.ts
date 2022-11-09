import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Pagination
/** 
 * The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.
 * 
**/
export class Pagination extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=total_count" })
  totalCount?: number;
}
