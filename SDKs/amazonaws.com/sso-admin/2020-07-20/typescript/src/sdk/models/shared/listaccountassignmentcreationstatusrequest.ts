import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperationStatusFilter } from "./operationstatusfilter";



export class ListAccountAssignmentCreationStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filter" })
  filter?: OperationStatusFilter;

  @SpeakeasyMetadata({ data: "json, name=InstanceArn" })
  instanceArn: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
