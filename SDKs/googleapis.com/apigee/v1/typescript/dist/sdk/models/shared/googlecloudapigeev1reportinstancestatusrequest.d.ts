import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1ResourceStatus } from "./googlecloudapigeev1resourcestatus";
/**
 * Request for ReportInstanceStatus.
**/
export declare class GoogleCloudApigeeV1ReportInstanceStatusRequest extends SpeakeasyBase {
    instanceUid?: string;
    reportTime?: string;
    resources?: GoogleCloudApigeeV1ResourceStatus[];
}
