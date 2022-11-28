import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdUnit } from "./adunit";



// ListAdUnitsResponse
/** 
 * Response definition for the adunit list rpc.
**/
export class ListAdUnitsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adUnits", elemType: AdUnit })
  adUnits?: AdUnit[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
