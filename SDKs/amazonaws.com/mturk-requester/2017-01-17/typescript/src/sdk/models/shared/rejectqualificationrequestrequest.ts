import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RejectQualificationRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=QualificationRequestId" })
  qualificationRequestId: string;

  @SpeakeasyMetadata({ data: "json, name=Reason" })
  reason?: string;
}
