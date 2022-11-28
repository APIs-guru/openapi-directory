import { SpeakeasyBase } from "../../../internal/utils";
import { ModelSortKeyEnum } from "./modelsortkeyenum";
import { OrderKeyEnum } from "./orderkeyenum";
export declare class ListModelsInput extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: ModelSortKeyEnum;
    sortOrder?: OrderKeyEnum;
}
