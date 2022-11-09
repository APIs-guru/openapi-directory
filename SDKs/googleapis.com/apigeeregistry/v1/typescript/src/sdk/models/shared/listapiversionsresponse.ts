import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiVersion } from "./apiversion";


// ListApiVersionsResponse
/** 
 * Response message for ListApiVersions.
**/
export class ListApiVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiVersions", elemType: shared.ApiVersion })
  apiVersions?: ApiVersion[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
