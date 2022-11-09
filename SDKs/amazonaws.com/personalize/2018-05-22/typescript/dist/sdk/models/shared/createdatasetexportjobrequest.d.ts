import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IngestionModeEnum } from "./ingestionmodeenum";
import { DatasetExportJobOutput } from "./datasetexportjoboutput";
export declare class CreateDatasetExportJobRequest extends SpeakeasyBase {
    datasetArn: string;
    ingestionMode?: IngestionModeEnum;
    jobName: string;
    jobOutput: DatasetExportJobOutput;
    roleArn: string;
}
