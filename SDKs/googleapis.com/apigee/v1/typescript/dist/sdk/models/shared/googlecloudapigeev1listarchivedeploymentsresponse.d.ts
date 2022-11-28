import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1ArchiveDeployment } from "./googlecloudapigeev1archivedeployment";
/**
 * Response for ListArchiveDeployments method.
**/
export declare class GoogleCloudApigeeV1ListArchiveDeploymentsResponse extends SpeakeasyBase {
    archiveDeployments?: GoogleCloudApigeeV1ArchiveDeployment[];
    nextPageToken?: string;
}
