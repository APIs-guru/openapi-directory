import { SpeakeasyBase } from "../../../internal/utils";
export declare class TableDataInsertAllRequestRows extends SpeakeasyBase {
    insertId?: string;
    json?: Map<string, any>;
}
export declare class TableDataInsertAllRequest extends SpeakeasyBase {
    ignoreUnknownValues?: boolean;
    kind?: string;
    rows?: TableDataInsertAllRequestRows[];
    skipInvalidRows?: boolean;
    templateSuffix?: string;
}
