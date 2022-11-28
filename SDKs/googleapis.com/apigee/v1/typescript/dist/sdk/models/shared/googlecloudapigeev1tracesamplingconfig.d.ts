import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudApigeeV1TraceSamplingConfigSamplerEnum {
    SamplerUnspecified = "SAMPLER_UNSPECIFIED",
    Off = "OFF",
    Probability = "PROBABILITY"
}
/**
 * TraceSamplingConfig represents the detail settings of distributed tracing. Only the fields that are defined in the distributed trace configuration can be overridden using the distribute trace configuration override APIs.
**/
export declare class GoogleCloudApigeeV1TraceSamplingConfig extends SpeakeasyBase {
    sampler?: GoogleCloudApigeeV1TraceSamplingConfigSamplerEnum;
    samplingRate?: number;
}
