import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NumberFilter
/** 
 * A number filter for querying findings.
**/
export class NumberFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Eq" })
  eq?: number;

  @Metadata({ data: "json, name=Gte" })
  gte?: number;

  @Metadata({ data: "json, name=Lte" })
  lte?: number;
}
