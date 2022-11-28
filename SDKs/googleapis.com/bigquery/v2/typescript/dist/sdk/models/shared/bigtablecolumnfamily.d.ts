import { SpeakeasyBase } from "../../../internal/utils";
import { BigtableColumn } from "./bigtablecolumn";
export declare class BigtableColumnFamily extends SpeakeasyBase {
    columns?: BigtableColumn[];
    encoding?: string;
    familyId?: string;
    onlyReadLatest?: boolean;
    type?: string;
}
