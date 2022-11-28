import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StringFilterComparisonEnum } from "./stringfiltercomparisonenum";



// StringFilter
/** 
 * A string filter for querying findings.
**/
export class StringFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Comparison" })
  comparison?: StringFilterComparisonEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
