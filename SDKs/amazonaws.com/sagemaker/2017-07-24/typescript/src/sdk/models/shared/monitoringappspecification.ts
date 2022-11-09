import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MonitoringAppSpecification
/** 
 * Container image configuration object for the monitoring job.
**/
export class MonitoringAppSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerArguments" })
  containerArguments?: string[];

  @Metadata({ data: "json, name=ContainerEntrypoint" })
  containerEntrypoint?: string[];

  @Metadata({ data: "json, name=ImageUri" })
  imageUri: string;

  @Metadata({ data: "json, name=PostAnalyticsProcessorSourceUri" })
  postAnalyticsProcessorSourceUri?: string;

  @Metadata({ data: "json, name=RecordPreprocessorSourceUri" })
  recordPreprocessorSourceUri?: string;
}
