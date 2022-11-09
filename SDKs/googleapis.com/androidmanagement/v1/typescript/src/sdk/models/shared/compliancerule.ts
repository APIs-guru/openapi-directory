import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiLevelCondition } from "./apilevelcondition";
import { NonComplianceDetailCondition } from "./noncompliancedetailcondition";


// ComplianceRule
/** 
 * A rule declaring which mitigating actions to take when a device is not compliant with its policy. For every rule, there is always an implicit mitigating action to set policy_compliant to false for the Device resource, and display a message on the device indicating that the device is not compliant with its policy. Other mitigating actions may optionally be taken as well, depending on the field values in the rule.
**/
export class ComplianceRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiLevelCondition" })
  apiLevelCondition?: ApiLevelCondition;

  @Metadata({ data: "json, name=disableApps" })
  disableApps?: boolean;

  @Metadata({ data: "json, name=nonComplianceDetailCondition" })
  nonComplianceDetailCondition?: NonComplianceDetailCondition;

  @Metadata({ data: "json, name=packageNamesToDisable" })
  packageNamesToDisable?: string[];
}
