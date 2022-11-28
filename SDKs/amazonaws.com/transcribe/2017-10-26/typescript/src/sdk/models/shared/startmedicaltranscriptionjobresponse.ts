import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MedicalTranscriptionJob } from "./medicaltranscriptionjob";



export class StartMedicalTranscriptionJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MedicalTranscriptionJob" })
  medicalTranscriptionJob?: MedicalTranscriptionJob;
}
