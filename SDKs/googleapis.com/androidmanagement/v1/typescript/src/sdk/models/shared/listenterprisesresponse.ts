import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Enterprise } from "./enterprise";


// ListEnterprisesResponse
/** 
 * Response to a request to list enterprises.
**/
export class ListEnterprisesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=enterprises", elemType: shared.Enterprise })
  enterprises?: Enterprise[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
