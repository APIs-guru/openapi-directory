import { SpeakeasyBase } from "../../../internal/utils";
import { DataExchange } from "./dataexchange";
/**
 * Message for response to listing data exchanges in an organization and location.
**/
export declare class ListOrgDataExchangesResponse extends SpeakeasyBase {
    dataExchanges?: DataExchange[];
    nextPageToken?: string;
}
