import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdResponse } from "./adresponse";



// BulkAdResponse
/** 
 * This type defines the fields for the create ads in bulk response.
**/
export class BulkAdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=responses", elemType: AdResponse })
  responses?: AdResponse[];
}
