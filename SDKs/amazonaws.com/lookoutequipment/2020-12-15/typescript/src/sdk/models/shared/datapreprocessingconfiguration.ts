import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetSamplingRateEnum } from "./targetsamplingrateenum";



// DataPreProcessingConfiguration
/** 
 * <p>The configuration is the <code>TargetSamplingRate</code>, which is the sampling rate of the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been collected at a 1 second level and you want the system to resample the data at a 1 minute rate before training, the <code>TargetSamplingRate</code> is 1 minute.</p> <p>When providing a value for the <code>TargetSamplingRate</code>, you must attach the prefix "PT" to the rate you want. The value for a 1 second rate is therefore <i>PT1S</i>, the value for a 15 minute rate is <i>PT15M</i>, and the value for a 1 hour rate is <i>PT1H</i> </p>
**/
export class DataPreProcessingConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TargetSamplingRate" })
  targetSamplingRate?: TargetSamplingRateEnum;
}
