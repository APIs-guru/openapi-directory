import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1Export } from "./googlecloudapigeev1export";


// GoogleCloudApigeeV1ListExportsResponse
/** 
 * The response for ListExports
**/
export class GoogleCloudApigeeV1ListExportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=exports", elemType: shared.GoogleCloudApigeeV1Export })
  exports?: GoogleCloudApigeeV1Export[];
}
