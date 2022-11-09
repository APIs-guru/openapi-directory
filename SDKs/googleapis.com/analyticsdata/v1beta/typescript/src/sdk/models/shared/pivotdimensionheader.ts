import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DimensionValue } from "./dimensionvalue";


// PivotDimensionHeader
/** 
 * Summarizes dimension values from a row for this pivot.
**/
export class PivotDimensionHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionValues", elemType: shared.DimensionValue })
  dimensionValues?: DimensionValue[];
}
