import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageClassificationDatasetMetadata } from "./imageclassificationdatasetmetadata";
import { TablesDatasetMetadata } from "./tablesdatasetmetadata";
import { TextClassificationDatasetMetadata } from "./textclassificationdatasetmetadata";
import { TextSentimentDatasetMetadata } from "./textsentimentdatasetmetadata";
import { TranslationDatasetMetadata } from "./translationdatasetmetadata";


// Dataset
/** 
 * A workspace for solving a single, particular machine learning (ML) problem. A workspace contains examples that may be annotated.
**/
export class Dataset extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=exampleCount" })
  exampleCount?: number;

  @Metadata({ data: "json, name=imageClassificationDatasetMetadata" })
  imageClassificationDatasetMetadata?: ImageClassificationDatasetMetadata;

  @Metadata({ data: "json, name=imageObjectDetectionDatasetMetadata" })
  imageObjectDetectionDatasetMetadata?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=tablesDatasetMetadata" })
  tablesDatasetMetadata?: TablesDatasetMetadata;

  @Metadata({ data: "json, name=textClassificationDatasetMetadata" })
  textClassificationDatasetMetadata?: TextClassificationDatasetMetadata;

  @Metadata({ data: "json, name=textExtractionDatasetMetadata" })
  textExtractionDatasetMetadata?: Map<string, any>;

  @Metadata({ data: "json, name=textSentimentDatasetMetadata" })
  textSentimentDatasetMetadata?: TextSentimentDatasetMetadata;

  @Metadata({ data: "json, name=translationDatasetMetadata" })
  translationDatasetMetadata?: TranslationDatasetMetadata;

  @Metadata({ data: "json, name=videoClassificationDatasetMetadata" })
  videoClassificationDatasetMetadata?: Map<string, any>;

  @Metadata({ data: "json, name=videoObjectTrackingDatasetMetadata" })
  videoObjectTrackingDatasetMetadata?: Map<string, any>;
}
