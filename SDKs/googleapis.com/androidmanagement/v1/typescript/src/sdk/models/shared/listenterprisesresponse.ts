import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Enterprise } from "./enterprise";



// ListEnterprisesResponse
/** 
 * Response to a request to list enterprises.
**/
export class ListEnterprisesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enterprises", elemType: Enterprise })
  enterprises?: Enterprise[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
