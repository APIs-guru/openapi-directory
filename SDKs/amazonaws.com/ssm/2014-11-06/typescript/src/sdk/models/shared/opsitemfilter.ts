import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpsItemFilterKeyEnum } from "./opsitemfilterkeyenum";
import { OpsItemFilterOperatorEnum } from "./opsitemfilteroperatorenum";



// OpsItemFilter
/** 
 * Describes an OpsItem filter.
**/
export class OpsItemFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: OpsItemFilterKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=Operator" })
  operator: OpsItemFilterOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values: string[];
}
