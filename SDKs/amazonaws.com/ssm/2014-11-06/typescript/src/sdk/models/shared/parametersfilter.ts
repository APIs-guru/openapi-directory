import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParametersFilterKeyEnum } from "./parametersfilterkeyenum";



// ParametersFilter
/** 
 * This data type is deprecated. Instead, use <a>ParameterStringFilter</a>.
**/
export class ParametersFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: ParametersFilterKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values: string[];
}
