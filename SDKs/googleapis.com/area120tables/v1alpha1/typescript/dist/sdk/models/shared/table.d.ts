import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ColumnDescription } from "./columndescription";
import { SavedView } from "./savedview";
/**
 * A single table. NextId: 8
**/
export declare class Table extends SpeakeasyBase {
    columns?: ColumnDescription[];
    createTime?: string;
    displayName?: string;
    name?: string;
    savedViews?: SavedView[];
    timeZone?: string;
    updateTime?: string;
}
