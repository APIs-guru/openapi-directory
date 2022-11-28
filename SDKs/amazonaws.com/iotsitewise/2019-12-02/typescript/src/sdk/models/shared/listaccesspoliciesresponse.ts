import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessPolicySummary } from "./accesspolicysummary";



export class ListAccessPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessPolicySummaries", elemType: AccessPolicySummary })
  accessPolicySummaries: AccessPolicySummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
