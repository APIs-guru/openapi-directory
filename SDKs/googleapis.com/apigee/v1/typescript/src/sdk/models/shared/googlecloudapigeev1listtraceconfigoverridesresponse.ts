import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1TraceConfigOverride } from "./googlecloudapigeev1traceconfigoverride";



// GoogleCloudApigeeV1ListTraceConfigOverridesResponse
/** 
 * Response for ListTraceConfigOverrides.
**/
export class GoogleCloudApigeeV1ListTraceConfigOverridesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=traceConfigOverrides", elemType: GoogleCloudApigeeV1TraceConfigOverride })
  traceConfigOverrides?: GoogleCloudApigeeV1TraceConfigOverride[];
}
