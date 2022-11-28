import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MedicalTranscriptionJobSummary } from "./medicaltranscriptionjobsummary";
import { TranscriptionJobStatusEnum } from "./transcriptionjobstatusenum";



export class ListMedicalTranscriptionJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MedicalTranscriptionJobSummaries", elemType: MedicalTranscriptionJobSummary })
  medicalTranscriptionJobSummaries?: MedicalTranscriptionJobSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: TranscriptionJobStatusEnum;
}
