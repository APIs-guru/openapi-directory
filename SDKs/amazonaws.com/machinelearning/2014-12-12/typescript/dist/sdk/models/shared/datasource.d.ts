import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RdsMetadata } from "./rdsmetadata";
import { RedshiftMetadata } from "./redshiftmetadata";
import { EntityStatusEnum } from "./entitystatusenum";
/**
 * <p> Represents the output of the <code>GetDataSource</code> operation. </p> <p> The content consists of the detailed metadata and data file information and the current status of the <code>DataSource</code>. </p>
**/
export declare class DataSource extends SpeakeasyBase {
    computeStatistics?: boolean;
    computeTime?: number;
    createdAt?: Date;
    createdByIamUser?: string;
    dataLocationS3?: string;
    dataRearrangement?: string;
    dataSizeInBytes?: number;
    dataSourceId?: string;
    finishedAt?: Date;
    lastUpdatedAt?: Date;
    message?: string;
    name?: string;
    numberOfFiles?: number;
    rdsMetadata?: RdsMetadata;
    redshiftMetadata?: RedshiftMetadata;
    roleArn?: string;
    startedAt?: Date;
    status?: EntityStatusEnum;
}
