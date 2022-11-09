import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OpsItemFilterKeyEnum } from "./opsitemfilterkeyenum";
import { OpsItemFilterOperatorEnum } from "./opsitemfilteroperatorenum";


// OpsItemFilter
/** 
 * Describes an OpsItem filter.
**/
export class OpsItemFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key: OpsItemFilterKeyEnum;

  @Metadata({ data: "json, name=Operator" })
  operator: OpsItemFilterOperatorEnum;

  @Metadata({ data: "json, name=Values" })
  values: string[];
}
