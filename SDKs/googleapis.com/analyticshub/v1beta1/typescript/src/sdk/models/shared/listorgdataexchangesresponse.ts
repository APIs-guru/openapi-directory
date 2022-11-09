import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataExchange } from "./dataexchange";


// ListOrgDataExchangesResponse
/** 
 * Message for response to listing data exchanges in an organization and location.
**/
export class ListOrgDataExchangesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataExchanges", elemType: shared.DataExchange })
  dataExchanges?: DataExchange[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
