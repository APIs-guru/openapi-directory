import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetStatusEnum } from "./datasetstatusenum";
export declare class CreateDatasetResponse extends SpeakeasyBase {
    datasetArn?: string;
    datasetName?: string;
    status?: DatasetStatusEnum;
}
