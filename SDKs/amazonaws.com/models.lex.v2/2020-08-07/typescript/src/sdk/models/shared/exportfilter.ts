import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportFilterNameEnum } from "./exportfilternameenum";
import { ExportFilterOperatorEnum } from "./exportfilteroperatorenum";



// ExportFilter
/** 
 * Filtes the response form the operation
**/
export class ExportFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: ExportFilterNameEnum;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator: ExportFilterOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values: string[];
}
