import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Range
/** 
 * Range information
**/
export class Range extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}
