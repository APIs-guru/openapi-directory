import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PolicySummary } from "./policysummary";


export class ListPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Policies", elemType: shared.PolicySummary })
  policies?: PolicySummary[];
}
