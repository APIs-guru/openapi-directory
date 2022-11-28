import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the container that a data quality monitoring job runs.
**/
export declare class DataQualityAppSpecification extends SpeakeasyBase {
    containerArguments?: string[];
    containerEntrypoint?: string[];
    environment?: Map<string, string>;
    imageUri: string;
    postAnalyticsProcessorSourceUri?: string;
    recordPreprocessorSourceUri?: string;
}
