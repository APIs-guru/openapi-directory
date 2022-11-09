import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ColumnMetadata } from "./columnmetadata";
import { Field } from "./field";
export declare class GetStatementResultResponse extends SpeakeasyBase {
    columnMetadata?: ColumnMetadata[];
    nextToken?: string;
    records: Field[][];
    totalNumRows?: number;
}
