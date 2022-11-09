import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ModelStatusEnum } from "./modelstatusenum";
export declare class ListModelsRequest extends SpeakeasyBase {
    datasetNameBeginsWith?: string;
    maxResults?: number;
    modelNameBeginsWith?: string;
    nextToken?: string;
    status?: ModelStatusEnum;
}
