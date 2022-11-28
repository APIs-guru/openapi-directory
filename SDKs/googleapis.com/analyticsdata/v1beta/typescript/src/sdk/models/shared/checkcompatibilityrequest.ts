import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterExpression } from "./filterexpression";
import { Dimension } from "./dimension";
import { Metric } from "./metric";


export enum CheckCompatibilityRequestCompatibilityFilterEnum {
    CompatibilityUnspecified = "COMPATIBILITY_UNSPECIFIED",
    Compatible = "COMPATIBLE",
    Incompatible = "INCOMPATIBLE"
}


// CheckCompatibilityRequest
/** 
 * The request for compatibility information for a report's dimensions and metrics. Check compatibility provides a preview of the compatibility of a report; fields shared with the `runReport` request should be the same values as in your `runReport` request.
**/
export class CheckCompatibilityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compatibilityFilter" })
  compatibilityFilter?: CheckCompatibilityRequestCompatibilityFilterEnum;

  @SpeakeasyMetadata({ data: "json, name=dimensionFilter" })
  dimensionFilter?: FilterExpression;

  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: Dimension })
  dimensions?: Dimension[];

  @SpeakeasyMetadata({ data: "json, name=metricFilter" })
  metricFilter?: FilterExpression;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: Metric })
  metrics?: Metric[];
}
