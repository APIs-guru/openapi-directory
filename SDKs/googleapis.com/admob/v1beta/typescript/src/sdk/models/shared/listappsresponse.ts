import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { App } from "./app";



// ListAppsResponse
/** 
 * Response for the apps list request.
**/
export class ListAppsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apps", elemType: App })
  apps?: App[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
