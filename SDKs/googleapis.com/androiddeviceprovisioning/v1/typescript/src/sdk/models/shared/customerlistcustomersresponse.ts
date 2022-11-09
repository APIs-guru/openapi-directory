import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Company } from "./company";


// CustomerListCustomersResponse
/** 
 * Response message for listing my customers.
**/
export class CustomerListCustomersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=customers", elemType: shared.Company })
  customers?: Company[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
