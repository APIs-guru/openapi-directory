import { SpeakeasyBase } from "../../../internal/utils";
import { RedshiftDataSpec } from "./redshiftdataspec";
export declare class CreateDataSourceFromRedshiftInput extends SpeakeasyBase {
    computeStatistics?: boolean;
    dataSourceId: string;
    dataSourceName?: string;
    dataSpec: RedshiftDataSpec;
    roleArn: string;
}
