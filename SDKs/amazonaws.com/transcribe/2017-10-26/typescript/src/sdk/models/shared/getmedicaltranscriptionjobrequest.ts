import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMedicalTranscriptionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MedicalTranscriptionJobName" })
  medicalTranscriptionJobName: string;
}
