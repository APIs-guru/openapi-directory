import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KeywordFilter
/** 
 * A keyword filter for querying findings.
**/
export class KeywordFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
