import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DataQualityAppSpecification
/** 
 * Information about the container that a data quality monitoring job runs.
**/
export class DataQualityAppSpecification extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=RecordPreprocessorSourceUri" })
  recordPreprocessorSourceUri?: string;
}
