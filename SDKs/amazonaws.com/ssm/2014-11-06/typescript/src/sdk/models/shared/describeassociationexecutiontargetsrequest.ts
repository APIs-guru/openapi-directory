import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociationExecutionTargetsFilter } from "./associationexecutiontargetsfilter";



export class DescribeAssociationExecutionTargetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationId" })
  associationId: string;

  @SpeakeasyMetadata({ data: "json, name=ExecutionId" })
  executionId: string;

  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: AssociationExecutionTargetsFilter })
  filters?: AssociationExecutionTargetsFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
