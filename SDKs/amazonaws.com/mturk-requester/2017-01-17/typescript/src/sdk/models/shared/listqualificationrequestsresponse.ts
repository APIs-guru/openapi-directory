import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { QualificationRequest } from "./qualificationrequest";


export class ListQualificationRequestsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=NumResults" })
  numResults?: number;

  @Metadata({ data: "json, name=QualificationRequests", elemType: shared.QualificationRequest })
  qualificationRequests?: QualificationRequest[];
}
