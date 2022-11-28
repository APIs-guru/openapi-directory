import { SpeakeasyBase } from "../../../internal/utils";
import { PublisherAccount } from "./publisheraccount";
/**
 * Response for the publisher account list request.
**/
export declare class ListPublisherAccountsResponse extends SpeakeasyBase {
    account?: PublisherAccount[];
    nextPageToken?: string;
}
