import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudApigeeV1TraceSamplingConfig } from "./googlecloudapigeev1tracesamplingconfig";


// GoogleCloudApigeeV1TraceConfigOverride
/** 
 * A representation of a configuration override.
**/
export class GoogleCloudApigeeV1TraceConfigOverride extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiProxy" })
  apiProxy?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=samplingConfig" })
  samplingConfig?: GoogleCloudApigeeV1TraceSamplingConfig;
}
