import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1TraceConfigOverride } from "./googlecloudapigeev1traceconfigoverride";


// GoogleCloudApigeeV1ListTraceConfigOverridesResponse
/** 
 * Response for ListTraceConfigOverrides.
**/
export class GoogleCloudApigeeV1ListTraceConfigOverridesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=traceConfigOverrides", elemType: shared.GoogleCloudApigeeV1TraceConfigOverride })
  traceConfigOverrides?: GoogleCloudApigeeV1TraceConfigOverride[];
}
