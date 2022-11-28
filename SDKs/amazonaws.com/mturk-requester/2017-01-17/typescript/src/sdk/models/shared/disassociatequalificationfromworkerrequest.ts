import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateQualificationFromWorkerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=QualificationTypeId" })
  qualificationTypeId: string;

  @SpeakeasyMetadata({ data: "json, name=Reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkerId" })
  workerId: string;
}
