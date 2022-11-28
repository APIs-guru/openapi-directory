import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudApigeeV1TraceSamplingConfigSamplerEnum {
    SamplerUnspecified = "SAMPLER_UNSPECIFIED",
    Off = "OFF",
    Probability = "PROBABILITY"
}


// GoogleCloudApigeeV1TraceSamplingConfig
/** 
 * TraceSamplingConfig represents the detail settings of distributed tracing. Only the fields that are defined in the distributed trace configuration can be overridden using the distribute trace configuration override APIs.
**/
export class GoogleCloudApigeeV1TraceSamplingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sampler" })
  sampler?: GoogleCloudApigeeV1TraceSamplingConfigSamplerEnum;

  @SpeakeasyMetadata({ data: "json, name=samplingRate" })
  samplingRate?: number;
}
