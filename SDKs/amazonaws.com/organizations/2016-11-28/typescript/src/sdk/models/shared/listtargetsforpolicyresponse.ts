import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PolicyTargetSummary } from "./policytargetsummary";


export class ListTargetsForPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Targets", elemType: shared.PolicyTargetSummary })
  targets?: PolicyTargetSummary[];
}
