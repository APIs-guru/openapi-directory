import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdResponse } from "./adresponse";


// BulkAdResponse
/** 
 * This type defines the fields for the create ads in bulk response.
**/
export class BulkAdResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=responses", elemType: shared.AdResponse })
  responses?: AdResponse[];
}
