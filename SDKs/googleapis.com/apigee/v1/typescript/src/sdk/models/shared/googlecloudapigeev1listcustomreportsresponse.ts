import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1CustomReport } from "./googlecloudapigeev1customreport";


// GoogleCloudApigeeV1ListCustomReportsResponse
/** 
 * This message encapsulates a list of custom report definitions
**/
export class GoogleCloudApigeeV1ListCustomReportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=qualifier", elemType: shared.GoogleCloudApigeeV1CustomReport })
  qualifier?: GoogleCloudApigeeV1CustomReport[];
}
