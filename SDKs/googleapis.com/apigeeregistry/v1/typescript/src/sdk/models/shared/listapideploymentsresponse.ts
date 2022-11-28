import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiDeployment } from "./apideployment";



// ListApiDeploymentsResponse
/** 
 * Response message for ListApiDeployments.
**/
export class ListApiDeploymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiDeployments", elemType: ApiDeployment })
  apiDeployments?: ApiDeployment[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
