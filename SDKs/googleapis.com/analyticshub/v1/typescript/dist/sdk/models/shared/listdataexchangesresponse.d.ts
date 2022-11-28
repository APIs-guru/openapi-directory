import { SpeakeasyBase } from "../../../internal/utils";
import { DataExchange } from "./dataexchange";
/**
 * Message for response to the list of data exchanges.
**/
export declare class ListDataExchangesResponse extends SpeakeasyBase {
    dataExchanges?: DataExchange[];
    nextPageToken?: string;
}
