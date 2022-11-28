import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicySummary } from "./policysummary";



export class ListPoliciesForTargetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Policies", elemType: PolicySummary })
  policies?: PolicySummary[];
}
