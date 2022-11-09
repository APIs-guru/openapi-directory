import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiDeployment } from "./apideployment";
/**
 * Response message for ListApiDeployments.
**/
export declare class ListApiDeploymentsResponse extends SpeakeasyBase {
    apiDeployments?: ApiDeployment[];
    nextPageToken?: string;
}
