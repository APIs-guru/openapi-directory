import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1RevisionStatus } from "./googlecloudapigeev1revisionstatus";
/**
 * The status of a resource loaded in the runtime.
**/
export declare class GoogleCloudApigeeV1ResourceStatus extends SpeakeasyBase {
    resource?: string;
    revisions?: GoogleCloudApigeeV1RevisionStatus[];
    totalReplicas?: number;
    uid?: string;
}
