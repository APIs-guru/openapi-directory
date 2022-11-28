import { SpeakeasyBase } from "../../../internal/utils";
import { S3DataSpec } from "./s3dataspec";
export declare class CreateDataSourceFromS3Input extends SpeakeasyBase {
    computeStatistics?: boolean;
    dataSourceId: string;
    dataSourceName?: string;
    dataSpec: S3DataSpec;
}
