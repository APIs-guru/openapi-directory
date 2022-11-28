import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionFilterClause } from "./dimensionfilterclause";
import { Dimension } from "./dimension";
import { Metric } from "./metric";



// Pivot
/** 
 * The Pivot describes the pivot section in the request. The Pivot helps rearrange the information in the table for certain reports by pivoting your data on a second dimension.
**/
export class Pivot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionFilterClauses", elemType: DimensionFilterClause })
  dimensionFilterClauses?: DimensionFilterClause[];

  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: Dimension })
  dimensions?: Dimension[];

  @SpeakeasyMetadata({ data: "json, name=maxGroupCount" })
  maxGroupCount?: number;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: Metric })
  metrics?: Metric[];

  @SpeakeasyMetadata({ data: "json, name=startGroup" })
  startGroup?: number;
}
