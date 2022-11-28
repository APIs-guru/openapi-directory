import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MedicalTranscriptionJob } from "./medicaltranscriptionjob";



export class GetMedicalTranscriptionJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MedicalTranscriptionJob" })
  medicalTranscriptionJob?: MedicalTranscriptionJob;
}
