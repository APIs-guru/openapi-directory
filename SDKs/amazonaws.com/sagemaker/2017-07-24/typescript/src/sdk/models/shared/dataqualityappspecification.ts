import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DataQualityAppSpecification
/** 
 * Information about the container that a data quality monitoring job runs.
**/
export class DataQualityAppSpecification extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=RecordPreprocessorSourceUri" })
  recordPreprocessorSourceUri?: string;
}
