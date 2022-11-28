import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1Export } from "./googlecloudapigeev1export";



// GoogleCloudApigeeV1ListExportsResponse
/** 
 * The response for ListExports
**/
export class GoogleCloudApigeeV1ListExportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exports", elemType: GoogleCloudApigeeV1Export })
  exports?: GoogleCloudApigeeV1Export[];
}
