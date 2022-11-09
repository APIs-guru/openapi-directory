import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssignmentStatusEnum } from "./assignmentstatusenum";


export class ListAssignmentsForHitRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssignmentStatuses" })
  assignmentStatuses?: AssignmentStatusEnum[];

  @Metadata({ data: "json, name=HITId" })
  hitId: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
