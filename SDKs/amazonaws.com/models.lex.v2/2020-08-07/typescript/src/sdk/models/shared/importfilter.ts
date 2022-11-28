import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportFilterNameEnum } from "./importfilternameenum";
import { ImportFilterOperatorEnum } from "./importfilteroperatorenum";



// ImportFilter
/** 
 * Filters the response from the operation.
**/
export class ImportFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: ImportFilterNameEnum;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator: ImportFilterOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values: string[];
}
