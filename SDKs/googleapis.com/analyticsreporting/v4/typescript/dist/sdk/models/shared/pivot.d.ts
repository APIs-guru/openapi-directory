import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionFilterClause } from "./dimensionfilterclause";
import { Dimension } from "./dimension";
import { Metric } from "./metric";
/**
 * The Pivot describes the pivot section in the request. The Pivot helps rearrange the information in the table for certain reports by pivoting your data on a second dimension.
**/
export declare class Pivot extends SpeakeasyBase {
    dimensionFilterClauses?: DimensionFilterClause[];
    dimensions?: Dimension[];
    maxGroupCount?: number;
    metrics?: Metric[];
    startGroup?: number;
}
