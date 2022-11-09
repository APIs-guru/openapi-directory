import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MapFilterComparisonEnum } from "./mapfiltercomparisonenum";


// MapFilter
/** 
 * A map filter for querying findings. Each map filter provides the field to check, the value to look for, and the comparison operator.
**/
export class MapFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Comparison" })
  comparison?: MapFilterComparisonEnum;

  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
