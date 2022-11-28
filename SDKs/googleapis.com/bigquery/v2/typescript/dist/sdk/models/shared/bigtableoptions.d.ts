import { SpeakeasyBase } from "../../../internal/utils";
import { BigtableColumnFamily } from "./bigtablecolumnfamily";
export declare class BigtableOptions extends SpeakeasyBase {
    columnFamilies?: BigtableColumnFamily[];
    ignoreUnspecifiedColumnFamilies?: boolean;
    readRowkeyAsString?: boolean;
}
