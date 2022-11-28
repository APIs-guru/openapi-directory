import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QualificationRequest } from "./qualificationrequest";



export class ListQualificationRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=NumResults" })
  numResults?: number;

  @SpeakeasyMetadata({ data: "json, name=QualificationRequests", elemType: QualificationRequest })
  qualificationRequests?: QualificationRequest[];
}
