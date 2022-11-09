import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ParametersFilterKeyEnum } from "./parametersfilterkeyenum";


// ParametersFilter
/** 
 * This data type is deprecated. Instead, use <a>ParameterStringFilter</a>.
**/
export class ParametersFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key: ParametersFilterKeyEnum;

  @Metadata({ data: "json, name=Values" })
  values: string[];
}
