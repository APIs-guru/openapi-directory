import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QualificationType } from "./qualificationtype";


export class CreateQualificationTypeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=QualificationType" })
  qualificationType?: QualificationType;
}
