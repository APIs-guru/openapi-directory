import { SpeakeasyBase } from "../../../internal/utils";
import { TableRow } from "./tablerow";
export declare class TableDataList extends SpeakeasyBase {
    etag?: string;
    kind?: string;
    pageToken?: string;
    rows?: TableRow[];
    totalRows?: string;
}
