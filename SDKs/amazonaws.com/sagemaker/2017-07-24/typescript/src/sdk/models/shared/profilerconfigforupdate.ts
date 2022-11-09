import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProfilerConfigForUpdate
/** 
 * Configuration information for updating the Debugger profile parameters, system and framework metrics configurations, and storage paths.
**/
export class ProfilerConfigForUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=DisableProfiler" })
  disableProfiler?: boolean;

  @Metadata({ data: "json, name=ProfilingIntervalInMilliseconds" })
  profilingIntervalInMilliseconds?: number;

  @Metadata({ data: "json, name=ProfilingParameters" })
  profilingParameters?: Map<string, string>;

  @Metadata({ data: "json, name=S3OutputPath" })
  s3OutputPath?: string;
}
