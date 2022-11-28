import { SpeakeasyBase } from "../../../internal/utils";
import { TranscriptionJobStatusEnum } from "./transcriptionjobstatusenum";
export declare class ListMedicalTranscriptionJobsRequest extends SpeakeasyBase {
    jobNameContains?: string;
    maxResults?: number;
    nextToken?: string;
    status?: TranscriptionJobStatusEnum;
}
