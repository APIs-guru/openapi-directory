import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Company } from "./company";


// ListCustomersResponse
/** 
 * Response message of all customers related to this partner.
**/
export class ListCustomersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=customers", elemType: shared.Company })
  customers?: Company[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
