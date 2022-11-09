import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Range
/** 
 * Range information
**/
export class Range extends SpeakeasyBase {
  @Metadata({ data: "json, name=limit" })
  limit: number;

  @Metadata({ data: "json, name=offset" })
  offset: number;

  @Metadata({ data: "json, name=total" })
  total: number;
}
