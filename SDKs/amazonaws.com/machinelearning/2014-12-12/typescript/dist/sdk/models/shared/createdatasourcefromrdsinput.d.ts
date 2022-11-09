import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RdsDataSpec } from "./rdsdataspec";
export declare class CreateDataSourceFromRdsInput extends SpeakeasyBase {
    computeStatistics?: boolean;
    dataSourceId: string;
    dataSourceName?: string;
    rdsData: RdsDataSpec;
    roleArn: string;
}
