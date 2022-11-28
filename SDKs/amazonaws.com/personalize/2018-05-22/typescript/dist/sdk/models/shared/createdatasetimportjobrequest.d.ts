import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
export declare class CreateDatasetImportJobRequest extends SpeakeasyBase {
    dataSource: DataSource;
    datasetArn: string;
    jobName: string;
    roleArn: string;
}
