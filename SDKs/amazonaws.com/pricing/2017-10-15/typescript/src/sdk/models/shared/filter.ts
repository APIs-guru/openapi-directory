import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FilterTypeEnum } from "./filtertypeenum";


// Filter
/** 
 * The constraints that you want all returned products to match.
**/
export class Filter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Field" })
  field: string;

  @Metadata({ data: "json, name=Type" })
  type: FilterTypeEnum;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
