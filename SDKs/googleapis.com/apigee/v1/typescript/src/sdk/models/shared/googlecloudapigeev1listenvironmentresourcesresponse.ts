import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1ResourceFile } from "./googlecloudapigeev1resourcefile";


// GoogleCloudApigeeV1ListEnvironmentResourcesResponse
/** 
 * Response for ListEnvironmentResources
**/
export class GoogleCloudApigeeV1ListEnvironmentResourcesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceFile", elemType: shared.GoogleCloudApigeeV1ResourceFile })
  resourceFile?: GoogleCloudApigeeV1ResourceFile[];
}
