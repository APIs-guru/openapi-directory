import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceRegion } from "./sourceregion";



// SourceRegionMessage
/** 
 * Contains the result of a successful invocation of the <code>DescribeSourceRegions</code> action.
**/
export class SourceRegionMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: SourceRegion })
  sourceRegions?: SourceRegion[];
}
