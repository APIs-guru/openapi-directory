import { SpeakeasyBase } from "../../../internal/utils";
import { ImageClassificationDatasetMetadata } from "./imageclassificationdatasetmetadata";
import { TablesDatasetMetadata } from "./tablesdatasetmetadata";
import { TextClassificationDatasetMetadata } from "./textclassificationdatasetmetadata";
import { TextSentimentDatasetMetadata } from "./textsentimentdatasetmetadata";
import { TranslationDatasetMetadata } from "./translationdatasetmetadata";
/**
 * A workspace for solving a single, particular machine learning (ML) problem. A workspace contains examples that may be annotated.
**/
export declare class Dataset extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    displayName?: string;
    etag?: string;
    exampleCount?: number;
    imageClassificationDatasetMetadata?: ImageClassificationDatasetMetadata;
    imageObjectDetectionDatasetMetadata?: Map<string, any>;
    name?: string;
    tablesDatasetMetadata?: TablesDatasetMetadata;
    textClassificationDatasetMetadata?: TextClassificationDatasetMetadata;
    textExtractionDatasetMetadata?: Map<string, any>;
    textSentimentDatasetMetadata?: TextSentimentDatasetMetadata;
    translationDatasetMetadata?: TranslationDatasetMetadata;
    videoClassificationDatasetMetadata?: Map<string, any>;
    videoObjectTrackingDatasetMetadata?: Map<string, any>;
}
