import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";



// AdResponse
/** 
 * This type defines the fields returned in an ad response.
**/
export class AdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adId" })
  adId?: string;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: Error })
  errors?: Error[];

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=listingId" })
  listingId?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: number;
}
