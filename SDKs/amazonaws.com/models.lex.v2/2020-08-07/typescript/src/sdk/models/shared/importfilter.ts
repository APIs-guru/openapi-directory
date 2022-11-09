import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportFilterNameEnum } from "./importfilternameenum";
import { ImportFilterOperatorEnum } from "./importfilteroperatorenum";


// ImportFilter
/** 
 * Filters the response from the operation.
**/
export class ImportFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: ImportFilterNameEnum;

  @Metadata({ data: "json, name=operator" })
  operator: ImportFilterOperatorEnum;

  @Metadata({ data: "json, name=values" })
  values: string[];
}
