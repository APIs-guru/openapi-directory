import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Distribution
/** 
 * This complex type defines of a piece of data that is grouped by the associated basis. It contains the name for the data set and its associated value.
**/
export class Distribution extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
