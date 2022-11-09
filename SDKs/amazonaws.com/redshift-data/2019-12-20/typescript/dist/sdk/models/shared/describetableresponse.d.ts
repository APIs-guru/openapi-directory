import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ColumnMetadata } from "./columnmetadata";
export declare class DescribeTableResponse extends SpeakeasyBase {
    columnList?: ColumnMetadata[];
    nextToken?: string;
    tableName?: string;
}
