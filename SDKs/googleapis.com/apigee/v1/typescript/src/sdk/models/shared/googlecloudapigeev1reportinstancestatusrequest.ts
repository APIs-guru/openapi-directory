import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1ResourceStatus } from "./googlecloudapigeev1resourcestatus";



// GoogleCloudApigeeV1ReportInstanceStatusRequest
/** 
 * Request for ReportInstanceStatus.
**/
export class GoogleCloudApigeeV1ReportInstanceStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceUid" })
  instanceUid?: string;

  @SpeakeasyMetadata({ data: "json, name=reportTime" })
  reportTime?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: GoogleCloudApigeeV1ResourceStatus })
  resources?: GoogleCloudApigeeV1ResourceStatus[];
}
