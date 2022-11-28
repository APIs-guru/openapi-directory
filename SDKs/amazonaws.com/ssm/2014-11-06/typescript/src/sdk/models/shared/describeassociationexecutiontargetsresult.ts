import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociationExecutionTarget } from "./associationexecutiontarget";



export class DescribeAssociationExecutionTargetsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationExecutionTargets", elemType: AssociationExecutionTarget })
  associationExecutionTargets?: AssociationExecutionTarget[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
