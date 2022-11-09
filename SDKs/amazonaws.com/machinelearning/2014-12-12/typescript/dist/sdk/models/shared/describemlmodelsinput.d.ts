import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MlModelFilterVariableEnum } from "./mlmodelfiltervariableenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class DescribeMlModelsInput extends SpeakeasyBase {
    eq?: string;
    filterVariable?: MlModelFilterVariableEnum;
    ge?: string;
    gt?: string;
    le?: string;
    lt?: string;
    limit?: number;
    ne?: string;
    nextToken?: string;
    prefix?: string;
    sortOrder?: SortOrderEnum;
}
