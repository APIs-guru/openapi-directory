import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteQualificationTypeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=QualificationTypeId" })
  qualificationTypeId: string;
}
