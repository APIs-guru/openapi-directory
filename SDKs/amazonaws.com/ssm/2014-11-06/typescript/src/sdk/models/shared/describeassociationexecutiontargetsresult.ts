import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssociationExecutionTarget } from "./associationexecutiontarget";


export class DescribeAssociationExecutionTargetsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationExecutionTargets", elemType: shared.AssociationExecutionTarget })
  associationExecutionTargets?: AssociationExecutionTarget[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
