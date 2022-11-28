import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataExchange } from "./dataexchange";



// ListDataExchangesResponse
/** 
 * Message for response to the list of data exchanges.
**/
export class ListDataExchangesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataExchanges", elemType: DataExchange })
  dataExchanges?: DataExchange[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
