import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1ResourceFile } from "./googlecloudapigeev1resourcefile";



// GoogleCloudApigeeV1ListEnvironmentResourcesResponse
/** 
 * Response for ListEnvironmentResources
**/
export class GoogleCloudApigeeV1ListEnvironmentResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceFile", elemType: GoogleCloudApigeeV1ResourceFile })
  resourceFile?: GoogleCloudApigeeV1ResourceFile[];
}
