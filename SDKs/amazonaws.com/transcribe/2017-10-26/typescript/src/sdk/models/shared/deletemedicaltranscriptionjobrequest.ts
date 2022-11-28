import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteMedicalTranscriptionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MedicalTranscriptionJobName" })
  medicalTranscriptionJobName: string;
}
