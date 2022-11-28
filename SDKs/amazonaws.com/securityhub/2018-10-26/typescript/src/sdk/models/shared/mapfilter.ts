import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MapFilterComparisonEnum } from "./mapfiltercomparisonenum";



// MapFilter
/** 
 * A map filter for querying findings. Each map filter provides the field to check, the value to look for, and the comparison operator.
**/
export class MapFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Comparison" })
  comparison?: MapFilterComparisonEnum;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
