import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProcessingS3DataDistributionTypeEnum } from "./processings3datadistributiontypeenum";
import { ProcessingS3InputModeEnum } from "./processings3inputmodeenum";


// EndpointInput
/** 
 * Input object for the endpoint
**/
export class EndpointInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTimeOffset" })
  endTimeOffset?: string;

  @Metadata({ data: "json, name=EndpointName" })
  endpointName: string;

  @Metadata({ data: "json, name=FeaturesAttribute" })
  featuresAttribute?: string;

  @Metadata({ data: "json, name=InferenceAttribute" })
  inferenceAttribute?: string;

  @Metadata({ data: "json, name=LocalPath" })
  localPath: string;

  @Metadata({ data: "json, name=ProbabilityAttribute" })
  probabilityAttribute?: string;

  @Metadata({ data: "json, name=ProbabilityThresholdAttribute" })
  probabilityThresholdAttribute?: number;

  @Metadata({ data: "json, name=S3DataDistributionType" })
  s3DataDistributionType?: ProcessingS3DataDistributionTypeEnum;

  @Metadata({ data: "json, name=S3InputMode" })
  s3InputMode?: ProcessingS3InputModeEnum;

  @Metadata({ data: "json, name=StartTimeOffset" })
  startTimeOffset?: string;
}
