import { SpeakeasyBase } from "../../../internal/utils";
import { ExportJobResource } from "./exportjobresource";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.
**/
export declare class ExportJobResponse extends SpeakeasyBase {
    applicationId: string;
    completedPieces?: number;
    completionDate?: string;
    creationDate: string;
    definition: ExportJobResource;
    failedPieces?: number;
    failures?: string[];
    id: string;
    jobStatus: JobStatusEnum;
    totalFailures?: number;
    totalPieces?: number;
    totalProcessed?: number;
    type: string;
}
