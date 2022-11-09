import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MultiRegionKey
/** 
 * Describes the primary or replica key in a multi-Region key.
**/
export class MultiRegionKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=Region" })
  region?: string;
}
