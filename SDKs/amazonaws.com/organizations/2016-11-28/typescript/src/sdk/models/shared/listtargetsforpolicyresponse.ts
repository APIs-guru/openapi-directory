import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyTargetSummary } from "./policytargetsummary";



export class ListTargetsForPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Targets", elemType: PolicyTargetSummary })
  targets?: PolicyTargetSummary[];
}
