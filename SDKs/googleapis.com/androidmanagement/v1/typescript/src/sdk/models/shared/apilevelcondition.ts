import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApiLevelCondition
/** 
 * A compliance rule condition which is satisfied if the Android Framework API level on the device doesn't meet a minimum requirement. There can only be one rule with this type of condition per policy.
**/
export class ApiLevelCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=minApiLevel" })
  minApiLevel?: number;
}
