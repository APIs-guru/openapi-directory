import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccessPolicySummary } from "./accesspolicysummary";


export class ListAccessPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessPolicySummaries", elemType: shared.AccessPolicySummary })
  accessPolicySummaries: AccessPolicySummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
