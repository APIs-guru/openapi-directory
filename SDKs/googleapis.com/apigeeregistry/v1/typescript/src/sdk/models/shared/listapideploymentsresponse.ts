import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiDeployment } from "./apideployment";


// ListApiDeploymentsResponse
/** 
 * Response message for ListApiDeployments.
**/
export class ListApiDeploymentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiDeployments", elemType: shared.ApiDeployment })
  apiDeployments?: ApiDeployment[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
