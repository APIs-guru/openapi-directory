import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListSecurityPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SecurityPolicyNames" })
  securityPolicyNames: string[];
}
