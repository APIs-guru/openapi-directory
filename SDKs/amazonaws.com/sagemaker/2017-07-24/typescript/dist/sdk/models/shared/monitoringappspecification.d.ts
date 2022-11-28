import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container image configuration object for the monitoring job.
**/
export declare class MonitoringAppSpecification extends SpeakeasyBase {
    containerArguments?: string[];
    containerEntrypoint?: string[];
    imageUri: string;
    postAnalyticsProcessorSourceUri?: string;
    recordPreprocessorSourceUri?: string;
}
