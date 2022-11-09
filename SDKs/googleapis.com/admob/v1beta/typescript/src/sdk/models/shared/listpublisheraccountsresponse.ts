import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PublisherAccount } from "./publisheraccount";


// ListPublisherAccountsResponse
/** 
 * Response for the publisher account list request.
**/
export class ListPublisherAccountsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=account", elemType: shared.PublisherAccount })
  account?: PublisherAccount[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
