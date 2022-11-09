import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RdsMetadata } from "./rdsmetadata";
import { RedshiftMetadata } from "./redshiftmetadata";
import { EntityStatusEnum } from "./entitystatusenum";
/**
 * Represents the output of a <code>GetDataSource</code> operation and describes a <code>DataSource</code>.
**/
export declare class GetDataSourceOutput extends SpeakeasyBase {
    computeStatistics?: boolean;
    computeTime?: number;
    createdAt?: Date;
    createdByIamUser?: string;
    dataLocationS3?: string;
    dataRearrangement?: string;
    dataSizeInBytes?: number;
    dataSourceId?: string;
    dataSourceSchema?: string;
    finishedAt?: Date;
    lastUpdatedAt?: Date;
    logUri?: string;
    message?: string;
    name?: string;
    numberOfFiles?: number;
    rdsMetadata?: RdsMetadata;
    redshiftMetadata?: RedshiftMetadata;
    roleArn?: string;
    startedAt?: Date;
    status?: EntityStatusEnum;
}
