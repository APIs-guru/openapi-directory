import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetStatusEnum } from "./datasetstatusenum";
/**
 * Contains information about the specific data set, including name, ARN, and status.
**/
export declare class DatasetSummary extends SpeakeasyBase {
    createdAt?: Date;
    datasetArn?: string;
    datasetName?: string;
    status?: DatasetStatusEnum;
}
