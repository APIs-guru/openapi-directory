import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1ResourceStatus } from "./googlecloudapigeev1resourcestatus";


// GoogleCloudApigeeV1ReportInstanceStatusRequest
/** 
 * Request for ReportInstanceStatus.
**/
export class GoogleCloudApigeeV1ReportInstanceStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceUid" })
  instanceUid?: string;

  @Metadata({ data: "json, name=reportTime" })
  reportTime?: string;

  @Metadata({ data: "json, name=resources", elemType: shared.GoogleCloudApigeeV1ResourceStatus })
  resources?: GoogleCloudApigeeV1ResourceStatus[];
}
