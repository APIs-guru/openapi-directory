import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetricPolicyRule
/** 
 * A setting that enables metrics at the object level. Each rule contains an object group and an object group name. If the policy includes the MetricPolicyRules parameter, you must include at least one rule. Each metric policy can include up to five rules by default. You can also <a href="https://console.aws.amazon.com/servicequotas/home?region=us-east-1#!/services/mediastore/quotas">request a quota increase</a> to allow up to 300 rules per policy.
**/
export class MetricPolicyRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=ObjectGroup" })
  objectGroup: string;

  @Metadata({ data: "json, name=ObjectGroupName" })
  objectGroupName: string;
}
