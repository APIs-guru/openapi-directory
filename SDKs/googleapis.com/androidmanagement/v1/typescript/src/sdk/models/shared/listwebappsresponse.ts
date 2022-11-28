import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebApp } from "./webapp";



// ListWebAppsResponse
/** 
 * Response to a request to list web apps for a given enterprise.
**/
export class ListWebAppsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=webApps", elemType: WebApp })
  webApps?: WebApp[];
}
