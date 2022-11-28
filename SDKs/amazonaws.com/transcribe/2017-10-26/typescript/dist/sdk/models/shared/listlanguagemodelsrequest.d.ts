import { SpeakeasyBase } from "../../../internal/utils";
import { ModelStatusEnum } from "./modelstatusenum";
export declare class ListLanguageModelsRequest extends SpeakeasyBase {
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    statusEquals?: ModelStatusEnum;
}
