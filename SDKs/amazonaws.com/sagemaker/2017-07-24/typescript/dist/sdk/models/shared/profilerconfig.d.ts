import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration information for Debugger system monitoring, framework profiling, and storage paths.
**/
export declare class ProfilerConfig extends SpeakeasyBase {
    profilingIntervalInMilliseconds?: number;
    profilingParameters?: Map<string, string>;
    s3OutputPath: string;
}
