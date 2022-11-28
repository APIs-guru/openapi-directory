import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TextClassificationModelMetadataClassificationTypeEnum {
    ClassificationTypeUnspecified = "CLASSIFICATION_TYPE_UNSPECIFIED",
    Multiclass = "MULTICLASS",
    Multilabel = "MULTILABEL"
}
/**
 * Model metadata that is specific to text classification.
**/
export declare class TextClassificationModelMetadata extends SpeakeasyBase {
    classificationType?: TextClassificationModelMetadataClassificationTypeEnum;
}
