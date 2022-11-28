import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NumberFilter
/** 
 * A number filter for querying findings.
**/
export class NumberFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Eq" })
  eq?: number;

  @SpeakeasyMetadata({ data: "json, name=Gte" })
  gte?: number;

  @SpeakeasyMetadata({ data: "json, name=Lte" })
  lte?: number;
}
