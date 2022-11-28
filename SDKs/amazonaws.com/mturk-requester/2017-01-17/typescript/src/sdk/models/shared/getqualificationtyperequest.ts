import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetQualificationTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=QualificationTypeId" })
  qualificationTypeId: string;
}
