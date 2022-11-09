import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WebApp } from "./webapp";


// ListWebAppsResponse
/** 
 * Response to a request to list web apps for a given enterprise.
**/
export class ListWebAppsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=webApps", elemType: shared.WebApp })
  webApps?: WebApp[];
}
