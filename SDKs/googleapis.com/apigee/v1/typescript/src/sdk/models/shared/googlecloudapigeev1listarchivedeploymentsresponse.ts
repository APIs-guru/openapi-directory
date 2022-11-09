import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1ArchiveDeployment } from "./googlecloudapigeev1archivedeployment";


// GoogleCloudApigeeV1ListArchiveDeploymentsResponse
/** 
 * Response for ListArchiveDeployments method.
**/
export class GoogleCloudApigeeV1ListArchiveDeploymentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=archiveDeployments", elemType: shared.GoogleCloudApigeeV1ArchiveDeployment })
  archiveDeployments?: GoogleCloudApigeeV1ArchiveDeployment[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
