import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublisherAccount } from "./publisheraccount";



// ListPublisherAccountsResponse
/** 
 * Response for the publisher account list request.
**/
export class ListPublisherAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account", elemType: PublisherAccount })
  account?: PublisherAccount[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
