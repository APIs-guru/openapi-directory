import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";



// PivotDimensionHeader
/** 
 * Summarizes dimension values from a row for this pivot.
**/
export class PivotDimensionHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionValues", elemType: DimensionValue })
  dimensionValues?: DimensionValue[];
}
