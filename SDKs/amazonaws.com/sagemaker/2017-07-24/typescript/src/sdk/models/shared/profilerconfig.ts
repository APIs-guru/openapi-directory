import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProfilerConfig
/** 
 * Configuration information for Debugger system monitoring, framework profiling, and storage paths.
**/
export class ProfilerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProfilingIntervalInMilliseconds" })
  profilingIntervalInMilliseconds?: number;

  @Metadata({ data: "json, name=ProfilingParameters" })
  profilingParameters?: Map<string, string>;

  @Metadata({ data: "json, name=S3OutputPath" })
  s3OutputPath: string;
}
