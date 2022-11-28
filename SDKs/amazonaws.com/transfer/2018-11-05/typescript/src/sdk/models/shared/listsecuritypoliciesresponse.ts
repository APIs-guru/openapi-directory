import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListSecurityPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityPolicyNames" })
  securityPolicyNames: string[];
}
