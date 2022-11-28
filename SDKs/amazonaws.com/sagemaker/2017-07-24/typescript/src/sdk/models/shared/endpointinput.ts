import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProcessingS3DataDistributionTypeEnum } from "./processings3datadistributiontypeenum";
import { ProcessingS3InputModeEnum } from "./processings3inputmodeenum";



// EndpointInput
/** 
 * Input object for the endpoint
**/
export class EndpointInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTimeOffset" })
  endTimeOffset?: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointName" })
  endpointName: string;

  @SpeakeasyMetadata({ data: "json, name=FeaturesAttribute" })
  featuresAttribute?: string;

  @SpeakeasyMetadata({ data: "json, name=InferenceAttribute" })
  inferenceAttribute?: string;

  @SpeakeasyMetadata({ data: "json, name=LocalPath" })
  localPath: string;

  @SpeakeasyMetadata({ data: "json, name=ProbabilityAttribute" })
  probabilityAttribute?: string;

  @SpeakeasyMetadata({ data: "json, name=ProbabilityThresholdAttribute" })
  probabilityThresholdAttribute?: number;

  @SpeakeasyMetadata({ data: "json, name=S3DataDistributionType" })
  s3DataDistributionType?: ProcessingS3DataDistributionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=S3InputMode" })
  s3InputMode?: ProcessingS3InputModeEnum;

  @SpeakeasyMetadata({ data: "json, name=StartTimeOffset" })
  startTimeOffset?: string;
}
