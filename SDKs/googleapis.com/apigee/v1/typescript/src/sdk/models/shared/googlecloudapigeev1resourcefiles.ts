import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1ResourceFile } from "./googlecloudapigeev1resourcefile";



// GoogleCloudApigeeV1ResourceFiles
/** 
 * List of resource files.
**/
export class GoogleCloudApigeeV1ResourceFiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceFile", elemType: GoogleCloudApigeeV1ResourceFile })
  resourceFile?: GoogleCloudApigeeV1ResourceFile[];
}
