import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TextClassificationDatasetMetadataClassificationTypeEnum {
    ClassificationTypeUnspecified = "CLASSIFICATION_TYPE_UNSPECIFIED",
    Multiclass = "MULTICLASS",
    Multilabel = "MULTILABEL"
}
/**
 * Dataset metadata for classification.
**/
export declare class TextClassificationDatasetMetadata extends SpeakeasyBase {
    classificationType?: TextClassificationDatasetMetadataClassificationTypeEnum;
}
