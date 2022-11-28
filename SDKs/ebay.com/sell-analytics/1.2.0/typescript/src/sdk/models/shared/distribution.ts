import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Distribution
/** 
 * This complex type defines of a piece of data that is grouped by the associated basis. It contains the name for the data set and its associated value.
**/
export class Distribution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
