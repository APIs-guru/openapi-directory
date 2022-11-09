import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FetchPageRequest
/** 
 * Specifies the details of the page to be fetched.
**/
export class FetchPageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken: string;

  @Metadata({ data: "json, name=TransactionId" })
  transactionId: string;
}
