import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PivotValueRegion
/** 
 * The metric values in the pivot region.
**/
export class PivotValueRegion extends SpeakeasyBase {
  @Metadata({ data: "json, name=values" })
  values?: string[];
}
