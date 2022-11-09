import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssociationExecutionFilter } from "./associationexecutionfilter";


export class DescribeAssociationExecutionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationId" })
  associationId: string;

  @Metadata({ data: "json, name=Filters", elemType: shared.AssociationExecutionFilter })
  filters?: AssociationExecutionFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
