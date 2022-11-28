import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProfilerConfig
/** 
 * Configuration information for Debugger system monitoring, framework profiling, and storage paths.
**/
export class ProfilerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProfilingIntervalInMilliseconds" })
  profilingIntervalInMilliseconds?: number;

  @SpeakeasyMetadata({ data: "json, name=ProfilingParameters" })
  profilingParameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=S3OutputPath" })
  s3OutputPath: string;
}
