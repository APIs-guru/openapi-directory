import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringProblemTypeEnum } from "./monitoringproblemtypeenum";
/**
 * Container image configuration object for the monitoring job.
**/
export declare class ModelQualityAppSpecification extends SpeakeasyBase {
    containerArguments?: string[];
    containerEntrypoint?: string[];
    environment?: Map<string, string>;
    imageUri: string;
    postAnalyticsProcessorSourceUri?: string;
    problemType?: MonitoringProblemTypeEnum;
    recordPreprocessorSourceUri?: string;
}
