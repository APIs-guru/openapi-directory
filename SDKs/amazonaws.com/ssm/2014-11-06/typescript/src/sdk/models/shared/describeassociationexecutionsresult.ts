import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociationExecution } from "./associationexecution";



export class DescribeAssociationExecutionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationExecutions", elemType: AssociationExecution })
  associationExecutions?: AssociationExecution[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
