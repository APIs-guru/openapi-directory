import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssignmentStatusEnum } from "./assignmentstatusenum";



export class ListAssignmentsForHitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssignmentStatuses" })
  assignmentStatuses?: AssignmentStatusEnum[];

  @SpeakeasyMetadata({ data: "json, name=HITId" })
  hitId: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
