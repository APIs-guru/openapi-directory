import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DescribedSecurityPolicy } from "./describedsecuritypolicy";



export class DescribeSecurityPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecurityPolicy" })
  securityPolicy: DescribedSecurityPolicy;
}
