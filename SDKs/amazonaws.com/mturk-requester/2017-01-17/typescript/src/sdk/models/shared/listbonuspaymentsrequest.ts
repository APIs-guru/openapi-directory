import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListBonusPaymentsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssignmentId" })
  assignmentId?: string;

  @Metadata({ data: "json, name=HITId" })
  hitId?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
