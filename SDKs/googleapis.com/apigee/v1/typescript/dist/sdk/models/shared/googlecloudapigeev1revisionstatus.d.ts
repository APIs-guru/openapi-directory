import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1UpdateError } from "./googlecloudapigeev1updateerror";
/**
 * The status of a specific resource revision.
**/
export declare class GoogleCloudApigeeV1RevisionStatus extends SpeakeasyBase {
    errors?: GoogleCloudApigeeV1UpdateError[];
    jsonSpec?: string;
    replicas?: number;
    revisionId?: string;
}
