import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataExchange } from "./dataexchange";



// ListOrgDataExchangesResponse
/** 
 * Message for response to listing data exchanges in an organization and location.
**/
export class ListOrgDataExchangesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataExchanges", elemType: DataExchange })
  dataExchanges?: DataExchange[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
