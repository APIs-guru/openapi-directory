import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QualificationType } from "./qualificationtype";



export class ListQualificationTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=NumResults" })
  numResults?: number;

  @SpeakeasyMetadata({ data: "json, name=QualificationTypes", elemType: QualificationType })
  qualificationTypes?: QualificationType[];
}
