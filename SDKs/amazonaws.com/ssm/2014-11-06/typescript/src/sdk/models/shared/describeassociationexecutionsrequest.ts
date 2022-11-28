import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociationExecutionFilter } from "./associationexecutionfilter";



export class DescribeAssociationExecutionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationId" })
  associationId: string;

  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: AssociationExecutionFilter })
  filters?: AssociationExecutionFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
