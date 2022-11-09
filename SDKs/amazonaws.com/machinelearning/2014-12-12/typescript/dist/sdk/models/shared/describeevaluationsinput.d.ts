import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EvaluationFilterVariableEnum } from "./evaluationfiltervariableenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class DescribeEvaluationsInput extends SpeakeasyBase {
    eq?: string;
    filterVariable?: EvaluationFilterVariableEnum;
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
