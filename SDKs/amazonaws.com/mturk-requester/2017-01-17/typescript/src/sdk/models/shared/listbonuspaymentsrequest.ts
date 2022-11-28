import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListBonusPaymentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssignmentId" })
  assignmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=HITId" })
  hitId?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
