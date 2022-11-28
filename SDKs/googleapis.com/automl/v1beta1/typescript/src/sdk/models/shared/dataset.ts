import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=exampleCount" })
  exampleCount?: number;

  @SpeakeasyMetadata({ data: "json, name=imageClassificationDatasetMetadata" })
  imageClassificationDatasetMetadata?: ImageClassificationDatasetMetadata;

  @SpeakeasyMetadata({ data: "json, name=imageObjectDetectionDatasetMetadata" })
  imageObjectDetectionDatasetMetadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=tablesDatasetMetadata" })
  tablesDatasetMetadata?: TablesDatasetMetadata;

  @SpeakeasyMetadata({ data: "json, name=textClassificationDatasetMetadata" })
  textClassificationDatasetMetadata?: TextClassificationDatasetMetadata;

  @SpeakeasyMetadata({ data: "json, name=textExtractionDatasetMetadata" })
  textExtractionDatasetMetadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=textSentimentDatasetMetadata" })
  textSentimentDatasetMetadata?: TextSentimentDatasetMetadata;

  @SpeakeasyMetadata({ data: "json, name=translationDatasetMetadata" })
  translationDatasetMetadata?: TranslationDatasetMetadata;

  @SpeakeasyMetadata({ data: "json, name=videoClassificationDatasetMetadata" })
  videoClassificationDatasetMetadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=videoObjectTrackingDatasetMetadata" })
  videoObjectTrackingDatasetMetadata?: Map<string, any>;
}
