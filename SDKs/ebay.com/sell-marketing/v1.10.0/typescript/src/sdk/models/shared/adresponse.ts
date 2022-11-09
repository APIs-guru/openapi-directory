import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";


// AdResponse
/** 
 * This type defines the fields returned in an ad response.
**/
export class AdResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=adId" })
  adId?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=listingId" })
  listingId?: string;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: number;
}
