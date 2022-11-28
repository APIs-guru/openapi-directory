import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdUnit } from "./adunit";



// ListLinkedAdUnitsResponse
/** 
 * Response definition for the ad units linked to a custom channel list rpc.
**/
export class ListLinkedAdUnitsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adUnits", elemType: AdUnit })
  adUnits?: AdUnit[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
