import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdUnit } from "./adunit";


// ListLinkedAdUnitsResponse
/** 
 * Response definition for the ad units linked to a custom channel list rpc.
**/
export class ListLinkedAdUnitsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=adUnits", elemType: shared.AdUnit })
  adUnits?: AdUnit[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
