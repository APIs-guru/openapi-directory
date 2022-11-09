import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataExchange } from "./dataexchange";


// ListDataExchangesResponse
/** 
 * Message for response to the list of data exchanges.
**/
export class ListDataExchangesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataExchanges", elemType: shared.DataExchange })
  dataExchanges?: DataExchange[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
