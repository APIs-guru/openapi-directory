import { SpeakeasyBase } from "../../../internal/utils";
import { IngestionInputConfiguration } from "./ingestioninputconfiguration";
import { IngestionJobStatusEnum } from "./ingestionjobstatusenum";
export declare class DescribeDataIngestionJobResponse extends SpeakeasyBase {
    createdAt?: Date;
    datasetArn?: string;
    failedReason?: string;
    ingestionInputConfiguration?: IngestionInputConfiguration;
    jobId?: string;
    roleArn?: string;
    status?: IngestionJobStatusEnum;
}
