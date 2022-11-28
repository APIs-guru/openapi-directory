import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QualificationType } from "./qualificationtype";



export class GetQualificationTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=QualificationType" })
  qualificationType?: QualificationType;
}
