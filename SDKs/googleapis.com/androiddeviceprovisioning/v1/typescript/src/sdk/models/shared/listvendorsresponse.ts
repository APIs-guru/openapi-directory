import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Company } from "./company";



// ListVendorsResponse
/** 
 * Response message to list vendors of the partner.
**/
export class ListVendorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;

  @SpeakeasyMetadata({ data: "json, name=vendors", elemType: Company })
  vendors?: Company[];
}
