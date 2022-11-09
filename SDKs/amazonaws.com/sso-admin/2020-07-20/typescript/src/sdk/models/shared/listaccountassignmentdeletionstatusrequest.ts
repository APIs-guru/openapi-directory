import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OperationStatusFilter } from "./operationstatusfilter";


export class ListAccountAssignmentDeletionStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filter" })
  filter?: OperationStatusFilter;

  @Metadata({ data: "json, name=InstanceArn" })
  instanceArn: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
