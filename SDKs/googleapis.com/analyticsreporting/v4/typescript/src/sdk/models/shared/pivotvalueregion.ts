import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PivotValueRegion
/** 
 * The metric values in the pivot region.
**/
export class PivotValueRegion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
