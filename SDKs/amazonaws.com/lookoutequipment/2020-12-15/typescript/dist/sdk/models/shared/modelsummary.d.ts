import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ModelStatusEnum } from "./modelstatusenum";
/**
 * Provides information about the specified ML model, including dataset and model names and ARNs, as well as status.
**/
export declare class ModelSummary extends SpeakeasyBase {
    createdAt?: Date;
    datasetArn?: string;
    datasetName?: string;
    modelArn?: string;
    modelName?: string;
    status?: ModelStatusEnum;
}
