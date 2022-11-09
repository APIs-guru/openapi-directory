import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OpsItemEventFilterKeyEnum } from "./opsitemeventfilterkeyenum";
import { OpsItemEventFilterOperatorEnum } from "./opsitemeventfilteroperatorenum";


// OpsItemEventFilter
/** 
 * Describes a filter for a specific list of OpsItem events. You can filter event information by using tags. You specify tags by using a key-value pair mapping. 
**/
export class OpsItemEventFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key: OpsItemEventFilterKeyEnum;

  @Metadata({ data: "json, name=Operator" })
  operator: OpsItemEventFilterOperatorEnum;

  @Metadata({ data: "json, name=Values" })
  values: string[];
}
