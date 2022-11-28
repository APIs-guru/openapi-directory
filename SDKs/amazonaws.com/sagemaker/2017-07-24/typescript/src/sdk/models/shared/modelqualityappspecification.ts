import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitoringProblemTypeEnum } from "./monitoringproblemtypeenum";



// ModelQualityAppSpecification
/** 
 * Container image configuration object for the monitoring job.
**/
export class ModelQualityAppSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerArguments" })
  containerArguments?: string[];

  @SpeakeasyMetadata({ data: "json, name=ContainerEntrypoint" })
  containerEntrypoint?: string[];

  @SpeakeasyMetadata({ data: "json, name=Environment" })
  environment?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ImageUri" })
  imageUri: string;

  @SpeakeasyMetadata({ data: "json, name=PostAnalyticsProcessorSourceUri" })
  postAnalyticsProcessorSourceUri?: string;

  @SpeakeasyMetadata({ data: "json, name=ProblemType" })
  problemType?: MonitoringProblemTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=RecordPreprocessorSourceUri" })
  recordPreprocessorSourceUri?: string;
}
