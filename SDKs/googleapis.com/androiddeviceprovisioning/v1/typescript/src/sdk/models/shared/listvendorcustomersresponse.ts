import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Company } from "./company";


// ListVendorCustomersResponse
/** 
 * Response message to list customers of the vendor.
**/
export class ListVendorCustomersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=customers", elemType: shared.Company })
  customers?: Company[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
