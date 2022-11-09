import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1ResourceFile } from "./googlecloudapigeev1resourcefile";


// GoogleCloudApigeeV1ResourceFiles
/** 
 * List of resource files.
**/
export class GoogleCloudApigeeV1ResourceFiles extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceFile", elemType: shared.GoogleCloudApigeeV1ResourceFile })
  resourceFile?: GoogleCloudApigeeV1ResourceFile[];
}
