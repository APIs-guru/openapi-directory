import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Region
/** 
 * This type defines information for a region.
**/
export class Region extends SpeakeasyBase {
  @Metadata({ data: "json, name=regionName" })
  regionName?: string;

  @Metadata({ data: "json, name=regionType" })
  regionType?: string;
}
