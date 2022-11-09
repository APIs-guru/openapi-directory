import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StringFilterComparisonEnum } from "./stringfiltercomparisonenum";


// StringFilter
/** 
 * A string filter for querying findings.
**/
export class StringFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Comparison" })
  comparison?: StringFilterComparisonEnum;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
