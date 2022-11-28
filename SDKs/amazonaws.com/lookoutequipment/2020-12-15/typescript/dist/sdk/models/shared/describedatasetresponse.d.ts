import { SpeakeasyBase } from "../../../internal/utils";
import { IngestionInputConfiguration } from "./ingestioninputconfiguration";
import { DatasetStatusEnum } from "./datasetstatusenum";
export declare class DescribeDatasetResponse extends SpeakeasyBase {
    createdAt?: Date;
    datasetArn?: string;
    datasetName?: string;
    ingestionInputConfiguration?: IngestionInputConfiguration;
    lastUpdatedAt?: Date;
    schema?: string;
    serverSideKmsKeyId?: string;
    status?: DatasetStatusEnum;
}
