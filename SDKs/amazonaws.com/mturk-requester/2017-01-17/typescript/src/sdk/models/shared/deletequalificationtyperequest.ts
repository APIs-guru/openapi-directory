import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteQualificationTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=QualificationTypeId" })
  qualificationTypeId: string;
}
