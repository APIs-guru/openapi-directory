import { SpeakeasyBase } from "../../../internal/utils";
import { MedicalTranscriptionJobSummary } from "./medicaltranscriptionjobsummary";
import { TranscriptionJobStatusEnum } from "./transcriptionjobstatusenum";
export declare class ListMedicalTranscriptionJobsResponse extends SpeakeasyBase {
    medicalTranscriptionJobSummaries?: MedicalTranscriptionJobSummary[];
    nextToken?: string;
    status?: TranscriptionJobStatusEnum;
}
