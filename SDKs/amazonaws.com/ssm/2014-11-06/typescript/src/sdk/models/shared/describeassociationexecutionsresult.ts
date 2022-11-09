import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssociationExecution } from "./associationexecution";


export class DescribeAssociationExecutionsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationExecutions", elemType: shared.AssociationExecution })
  associationExecutions?: AssociationExecution[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
