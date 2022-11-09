import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RejectQualificationRequestRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=QualificationRequestId" })
  qualificationRequestId: string;

  @Metadata({ data: "json, name=Reason" })
  reason?: string;
}
