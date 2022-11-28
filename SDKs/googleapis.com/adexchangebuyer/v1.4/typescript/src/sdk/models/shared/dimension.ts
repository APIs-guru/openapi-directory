import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionDimensionValue } from "./dimensiondimensionvalue";



// Dimension
/** 
 * This message carries publisher provided breakdown. E.g. {dimension_type: 'COUNTRY', [{dimension_value: {id: 1, name: 'US'}}, {dimension_value: {id: 2, name: 'UK'}}]}
**/
export class Dimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionType" })
  dimensionType?: string;

  @SpeakeasyMetadata({ data: "json, name=dimensionValues", elemType: DimensionDimensionValue })
  dimensionValues?: DimensionDimensionValue[];
}
