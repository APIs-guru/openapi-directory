import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MedicalTranscriptionJob } from "./medicaltranscriptionjob";


export class StartMedicalTranscriptionJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MedicalTranscriptionJob" })
  medicalTranscriptionJob?: MedicalTranscriptionJob;
}
