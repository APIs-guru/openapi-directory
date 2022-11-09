import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QualificationStatusEnum } from "./qualificationstatusenum";


export class ListWorkersWithQualificationTypeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=QualificationTypeId" })
  qualificationTypeId: string;

  @Metadata({ data: "json, name=Status" })
  status?: QualificationStatusEnum;
}
