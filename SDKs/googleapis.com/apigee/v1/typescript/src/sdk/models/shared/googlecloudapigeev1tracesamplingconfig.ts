import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudApigeeV1TraceSamplingConfigSamplerEnum {
    SamplerUnspecified = "SAMPLER_UNSPECIFIED"
,    Off = "OFF"
,    Probability = "PROBABILITY"
}


// GoogleCloudApigeeV1TraceSamplingConfig
/** 
 * TraceSamplingConfig represents the detail settings of distributed tracing. Only the fields that are defined in the distributed trace configuration can be overridden using the distribute trace configuration override APIs.
**/
export class GoogleCloudApigeeV1TraceSamplingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=sampler" })
  sampler?: GoogleCloudApigeeV1TraceSamplingConfigSamplerEnum;

  @Metadata({ data: "json, name=samplingRate" })
  samplingRate?: number;
}
