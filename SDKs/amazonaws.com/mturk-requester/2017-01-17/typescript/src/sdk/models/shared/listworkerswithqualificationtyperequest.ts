import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QualificationStatusEnum } from "./qualificationstatusenum";



export class ListWorkersWithQualificationTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=QualificationTypeId" })
  qualificationTypeId: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: QualificationStatusEnum;
}
