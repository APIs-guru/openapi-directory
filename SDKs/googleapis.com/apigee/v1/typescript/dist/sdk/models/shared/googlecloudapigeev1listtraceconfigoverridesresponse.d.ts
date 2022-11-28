import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1TraceConfigOverride } from "./googlecloudapigeev1traceconfigoverride";
/**
 * Response for ListTraceConfigOverrides.
**/
export declare class GoogleCloudApigeeV1ListTraceConfigOverridesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    traceConfigOverrides?: GoogleCloudApigeeV1TraceConfigOverride[];
}
