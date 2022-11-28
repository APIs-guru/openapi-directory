import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MultiRegionKey
/** 
 * Describes the primary or replica key in a multi-Region key.
**/
export class MultiRegionKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Region" })
  region?: string;
}
