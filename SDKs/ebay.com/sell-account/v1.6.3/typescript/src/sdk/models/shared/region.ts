import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Region
/** 
 * This type defines information for a region.
**/
export class Region extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=regionName" })
  regionName?: string;

  @SpeakeasyMetadata({ data: "json, name=regionType" })
  regionType?: string;
}
