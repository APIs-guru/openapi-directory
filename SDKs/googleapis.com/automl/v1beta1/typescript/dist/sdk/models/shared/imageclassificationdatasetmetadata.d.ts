import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ImageClassificationDatasetMetadataClassificationTypeEnum {
    ClassificationTypeUnspecified = "CLASSIFICATION_TYPE_UNSPECIFIED",
    Multiclass = "MULTICLASS",
    Multilabel = "MULTILABEL"
}
/**
 * Dataset metadata that is specific to image classification.
**/
export declare class ImageClassificationDatasetMetadata extends SpeakeasyBase {
    classificationType?: ImageClassificationDatasetMetadataClassificationTypeEnum;
}
