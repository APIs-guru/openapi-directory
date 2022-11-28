import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Company } from "./company";



// CustomerListCustomersResponse
/** 
 * Response message for listing my customers.
**/
export class CustomerListCustomersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customers", elemType: Company })
  customers?: Company[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
