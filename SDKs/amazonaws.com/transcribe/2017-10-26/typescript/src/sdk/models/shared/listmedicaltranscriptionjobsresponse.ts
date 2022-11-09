import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MedicalTranscriptionJobSummary } from "./medicaltranscriptionjobsummary";
import { TranscriptionJobStatusEnum } from "./transcriptionjobstatusenum";


export class ListMedicalTranscriptionJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MedicalTranscriptionJobSummaries", elemType: shared.MedicalTranscriptionJobSummary })
  medicalTranscriptionJobSummaries?: MedicalTranscriptionJobSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Status" })
  status?: TranscriptionJobStatusEnum;
}
