import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Company } from "./company";


// ListVendorsResponse
/** 
 * Response message to list vendors of the partner.
**/
export class ListVendorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;

  @Metadata({ data: "json, name=vendors", elemType: shared.Company })
  vendors?: Company[];
}
