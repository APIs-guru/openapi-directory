import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProfilerConfigForUpdate
/** 
 * Configuration information for updating the Debugger profile parameters, system and framework metrics configurations, and storage paths.
**/
export class ProfilerConfigForUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DisableProfiler" })
  disableProfiler?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ProfilingIntervalInMilliseconds" })
  profilingIntervalInMilliseconds?: number;

  @SpeakeasyMetadata({ data: "json, name=ProfilingParameters" })
  profilingParameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=S3OutputPath" })
  s3OutputPath?: string;
}
