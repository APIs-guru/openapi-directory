import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeSecurityPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecurityPolicyName" })
  securityPolicyName: string;
}
