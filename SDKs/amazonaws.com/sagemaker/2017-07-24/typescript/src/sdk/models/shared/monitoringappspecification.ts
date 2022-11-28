import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MonitoringAppSpecification
/** 
 * Container image configuration object for the monitoring job.
**/
export class MonitoringAppSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerArguments" })
  containerArguments?: string[];

  @SpeakeasyMetadata({ data: "json, name=ContainerEntrypoint" })
  containerEntrypoint?: string[];

  @SpeakeasyMetadata({ data: "json, name=ImageUri" })
  imageUri: string;

  @SpeakeasyMetadata({ data: "json, name=PostAnalyticsProcessorSourceUri" })
  postAnalyticsProcessorSourceUri?: string;

  @SpeakeasyMetadata({ data: "json, name=RecordPreprocessorSourceUri" })
  recordPreprocessorSourceUri?: string;
}
