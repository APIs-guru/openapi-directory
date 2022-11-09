import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AcceptQualificationRequestRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=IntegerValue" })
  integerValue?: number;

  @Metadata({ data: "json, name=QualificationRequestId" })
  qualificationRequestId: string;
}
