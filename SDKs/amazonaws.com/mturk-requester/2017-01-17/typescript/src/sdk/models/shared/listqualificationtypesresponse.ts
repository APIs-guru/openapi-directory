import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { QualificationType } from "./qualificationtype";


export class ListQualificationTypesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=NumResults" })
  numResults?: number;

  @Metadata({ data: "json, name=QualificationTypes", elemType: shared.QualificationType })
  qualificationTypes?: QualificationType[];
}
