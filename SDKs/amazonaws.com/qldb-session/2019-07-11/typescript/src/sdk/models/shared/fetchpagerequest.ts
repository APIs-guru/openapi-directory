import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FetchPageRequest
/** 
 * Specifies the details of the page to be fetched.
**/
export class FetchPageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextPageToken" })
  nextPageToken: string;

  @SpeakeasyMetadata({ data: "json, name=TransactionId" })
  transactionId: string;
}
