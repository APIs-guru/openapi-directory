import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateQualificationFromWorkerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=QualificationTypeId" })
  qualificationTypeId: string;

  @Metadata({ data: "json, name=Reason" })
  reason?: string;

  @Metadata({ data: "json, name=WorkerId" })
  workerId: string;
}
