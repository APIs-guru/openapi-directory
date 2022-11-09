import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListQualificationRequestsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=QualificationTypeId" })
  qualificationTypeId?: string;
}
