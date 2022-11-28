import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiVersion } from "./apiversion";



// ListApiVersionsResponse
/** 
 * Response message for ListApiVersions.
**/
export class ListApiVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiVersions", elemType: ApiVersion })
  apiVersions?: ApiVersion[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
