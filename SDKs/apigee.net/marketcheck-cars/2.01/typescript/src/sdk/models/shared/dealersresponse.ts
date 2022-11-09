import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Dealer } from "./dealer";


// DealersResponse
/** 
 * Dealers Response
**/
export class DealersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dealers", elemType: shared.Dealer })
  dealers?: Dealer[];

  @Metadata({ data: "json, name=num_found" })
  numFound?: number;
}
