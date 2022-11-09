import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActionTarget } from "./actiontarget";


export class DescribeActionTargetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActionTargets", elemType: shared.ActionTarget })
  actionTargets: ActionTarget[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
