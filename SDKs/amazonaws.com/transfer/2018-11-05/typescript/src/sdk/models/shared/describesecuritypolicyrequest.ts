import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeSecurityPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecurityPolicyName" })
  securityPolicyName: string;
}
