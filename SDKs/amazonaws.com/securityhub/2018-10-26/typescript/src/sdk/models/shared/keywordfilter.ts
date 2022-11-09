import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KeywordFilter
/** 
 * A keyword filter for querying findings.
**/
export class KeywordFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Value" })
  value?: string;
}
