import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DimensionDimensionValue } from "./dimensiondimensionvalue";


// Dimension
/** 
 * This message carries publisher provided breakdown. E.g. {dimension_type: 'COUNTRY', [{dimension_value: {id: 1, name: 'US'}}, {dimension_value: {id: 2, name: 'UK'}}]}
**/
export class Dimension extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionType" })
  dimensionType?: string;

  @Metadata({ data: "json, name=dimensionValues", elemType: shared.DimensionDimensionValue })
  dimensionValues?: DimensionDimensionValue[];
}
