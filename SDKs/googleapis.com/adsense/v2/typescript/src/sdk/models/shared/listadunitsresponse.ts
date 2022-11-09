import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdUnit } from "./adunit";


// ListAdUnitsResponse
/** 
 * Response definition for the adunit list rpc.
**/
export class ListAdUnitsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=adUnits", elemType: shared.AdUnit })
  adUnits?: AdUnit[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
