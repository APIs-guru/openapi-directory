import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Company } from "./company";



// ListVendorCustomersResponse
/** 
 * Response message to list customers of the vendor.
**/
export class ListVendorCustomersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customers", elemType: Company })
  customers?: Company[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
