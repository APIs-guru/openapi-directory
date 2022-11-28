import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1CustomReport } from "./googlecloudapigeev1customreport";



// GoogleCloudApigeeV1ListCustomReportsResponse
/** 
 * This message encapsulates a list of custom report definitions
**/
export class GoogleCloudApigeeV1ListCustomReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=qualifier", elemType: GoogleCloudApigeeV1CustomReport })
  qualifier?: GoogleCloudApigeeV1CustomReport[];
}
