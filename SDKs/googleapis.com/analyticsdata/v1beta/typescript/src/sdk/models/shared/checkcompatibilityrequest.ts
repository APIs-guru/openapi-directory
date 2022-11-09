import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FilterExpression } from "./filterexpression";
import { Dimension } from "./dimension";
import { FilterExpression } from "./filterexpression";
import { Metric } from "./metric";

export enum CheckCompatibilityRequestCompatibilityFilterEnum {
    CompatibilityUnspecified = "COMPATIBILITY_UNSPECIFIED"
,    Compatible = "COMPATIBLE"
,    Incompatible = "INCOMPATIBLE"
}


// CheckCompatibilityRequest
/** 
 * The request for compatibility information for a report's dimensions and metrics. Check compatibility provides a preview of the compatibility of a report; fields shared with the `runReport` request should be the same values as in your `runReport` request.
**/
export class CheckCompatibilityRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=compatibilityFilter" })
  compatibilityFilter?: CheckCompatibilityRequestCompatibilityFilterEnum;

  @Metadata({ data: "json, name=dimensionFilter" })
  dimensionFilter?: FilterExpression;

  @Metadata({ data: "json, name=dimensions", elemType: shared.Dimension })
  dimensions?: Dimension[];

  @Metadata({ data: "json, name=metricFilter" })
  metricFilter?: FilterExpression;

  @Metadata({ data: "json, name=metrics", elemType: shared.Metric })
  metrics?: Metric[];
}
