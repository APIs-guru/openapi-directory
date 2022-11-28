import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Company } from "./company";



// ListCustomersResponse
/** 
 * Response message of all customers related to this partner.
**/
export class ListCustomersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customers", elemType: Company })
  customers?: Company[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
