import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration information for updating the Debugger profile parameters, system and framework metrics configurations, and storage paths.
**/
export declare class ProfilerConfigForUpdate extends SpeakeasyBase {
    disableProfiler?: boolean;
    profilingIntervalInMilliseconds?: number;
    profilingParameters?: Map<string, string>;
    s3OutputPath?: string;
}
