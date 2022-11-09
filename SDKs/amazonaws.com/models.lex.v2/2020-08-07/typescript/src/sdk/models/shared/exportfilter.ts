import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExportFilterNameEnum } from "./exportfilternameenum";
import { ExportFilterOperatorEnum } from "./exportfilteroperatorenum";


// ExportFilter
/** 
 * Filtes the response form the operation
**/
export class ExportFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: ExportFilterNameEnum;

  @Metadata({ data: "json, name=operator" })
  operator: ExportFilterOperatorEnum;

  @Metadata({ data: "json, name=values" })
  values: string[];
}
