import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteMedicalTranscriptionJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MedicalTranscriptionJobName" })
  medicalTranscriptionJobName: string;
}
