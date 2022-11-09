import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssociationExecutionTargetsFilter } from "./associationexecutiontargetsfilter";


export class DescribeAssociationExecutionTargetsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationId" })
  associationId: string;

  @Metadata({ data: "json, name=ExecutionId" })
  executionId: string;

  @Metadata({ data: "json, name=Filters", elemType: shared.AssociationExecutionTargetsFilter })
  filters?: AssociationExecutionTargetsFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
