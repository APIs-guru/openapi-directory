import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpsItemEventFilterKeyEnum } from "./opsitemeventfilterkeyenum";
import { OpsItemEventFilterOperatorEnum } from "./opsitemeventfilteroperatorenum";



// OpsItemEventFilter
/** 
 * Describes a filter for a specific list of OpsItem events. You can filter event information by using tags. You specify tags by using a key-value pair mapping. 
**/
export class OpsItemEventFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: OpsItemEventFilterKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=Operator" })
  operator: OpsItemEventFilterOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values: string[];
}
