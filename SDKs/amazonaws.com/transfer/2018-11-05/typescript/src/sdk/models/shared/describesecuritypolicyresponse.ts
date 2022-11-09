import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DescribedSecurityPolicy } from "./describedsecuritypolicy";


export class DescribeSecurityPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecurityPolicy" })
  securityPolicy: DescribedSecurityPolicy;
}
