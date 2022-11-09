import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetQualificationTypeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=QualificationTypeId" })
  qualificationTypeId: string;
}
