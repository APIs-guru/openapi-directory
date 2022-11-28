import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1ArchiveDeployment } from "./googlecloudapigeev1archivedeployment";



// GoogleCloudApigeeV1ListArchiveDeploymentsResponse
/** 
 * Response for ListArchiveDeployments method.
**/
export class GoogleCloudApigeeV1ListArchiveDeploymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archiveDeployments", elemType: GoogleCloudApigeeV1ArchiveDeployment })
  archiveDeployments?: GoogleCloudApigeeV1ArchiveDeployment[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
