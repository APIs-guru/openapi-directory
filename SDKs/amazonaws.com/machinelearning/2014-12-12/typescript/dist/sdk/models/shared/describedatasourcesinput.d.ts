import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceFilterVariableEnum } from "./datasourcefiltervariableenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class DescribeDataSourcesInput extends SpeakeasyBase {
    eq?: string;
    filterVariable?: DataSourceFilterVariableEnum;
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
