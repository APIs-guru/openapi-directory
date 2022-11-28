import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AcceptQualificationRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IntegerValue" })
  integerValue?: number;

  @SpeakeasyMetadata({ data: "json, name=QualificationRequestId" })
  qualificationRequestId: string;
}
