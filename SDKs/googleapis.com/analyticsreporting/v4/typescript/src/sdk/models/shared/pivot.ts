import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DimensionFilterClause } from "./dimensionfilterclause";
import { Dimension } from "./dimension";
import { Metric } from "./metric";


// Pivot
/** 
 * The Pivot describes the pivot section in the request. The Pivot helps rearrange the information in the table for certain reports by pivoting your data on a second dimension.
**/
export class Pivot extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionFilterClauses", elemType: shared.DimensionFilterClause })
  dimensionFilterClauses?: DimensionFilterClause[];

  @Metadata({ data: "json, name=dimensions", elemType: shared.Dimension })
  dimensions?: Dimension[];

  @Metadata({ data: "json, name=maxGroupCount" })
  maxGroupCount?: number;

  @Metadata({ data: "json, name=metrics", elemType: shared.Metric })
  metrics?: Metric[];

  @Metadata({ data: "json, name=startGroup" })
  startGroup?: number;
}
