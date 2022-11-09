import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MonitoringProblemTypeEnum } from "./monitoringproblemtypeenum";


// ModelQualityAppSpecification
/** 
 * Container image configuration object for the monitoring job.
**/
export class ModelQualityAppSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerArguments" })
  containerArguments?: string[];

  @Metadata({ data: "json, name=ContainerEntrypoint" })
  containerEntrypoint?: string[];

  @Metadata({ data: "json, name=Environment" })
  environment?: Map<string, string>;

  @Metadata({ data: "json, name=ImageUri" })
  imageUri: string;

  @Metadata({ data: "json, name=PostAnalyticsProcessorSourceUri" })
  postAnalyticsProcessorSourceUri?: string;

  @Metadata({ data: "json, name=ProblemType" })
  problemType?: MonitoringProblemTypeEnum;

  @Metadata({ data: "json, name=RecordPreprocessorSourceUri" })
  recordPreprocessorSourceUri?: string;
}
