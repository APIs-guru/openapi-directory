import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { App } from "./app";


// ListAppsResponse
/** 
 * Response for the apps list request.
**/
export class ListAppsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apps", elemType: shared.App })
  apps?: App[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
