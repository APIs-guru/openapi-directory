import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionTarget } from "./actiontarget";



export class DescribeActionTargetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionTargets", elemType: ActionTarget })
  actionTargets: ActionTarget[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
