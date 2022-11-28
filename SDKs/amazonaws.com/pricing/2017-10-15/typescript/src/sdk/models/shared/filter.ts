import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterTypeEnum } from "./filtertypeenum";



// Filter
/** 
 * The constraints that you want all returned products to match.
**/
export class Filter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Field" })
  field: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: FilterTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
