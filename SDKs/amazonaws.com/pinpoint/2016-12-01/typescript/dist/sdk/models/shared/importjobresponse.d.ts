import { SpeakeasyBase } from "../../../internal/utils";
import { ImportJobResource } from "./importjobresource";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.
**/
export declare class ImportJobResponse extends SpeakeasyBase {
    applicationId: string;
    completedPieces?: number;
    completionDate?: string;
    creationDate: string;
    definition: ImportJobResource;
    failedPieces?: number;
    failures?: string[];
    id: string;
    jobStatus: JobStatusEnum;
    totalFailures?: number;
    totalPieces?: number;
    totalProcessed?: number;
    type: string;
}
