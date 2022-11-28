import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1TraceSamplingConfig } from "./googlecloudapigeev1tracesamplingconfig";



// GoogleCloudApigeeV1TraceConfigOverride
/** 
 * A representation of a configuration override.
**/
export class GoogleCloudApigeeV1TraceConfigOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiProxy" })
  apiProxy?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=samplingConfig" })
  samplingConfig?: GoogleCloudApigeeV1TraceSamplingConfig;
}
