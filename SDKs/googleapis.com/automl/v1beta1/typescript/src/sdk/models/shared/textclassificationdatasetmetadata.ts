import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TextClassificationDatasetMetadataClassificationTypeEnum {
    ClassificationTypeUnspecified = "CLASSIFICATION_TYPE_UNSPECIFIED"
,    Multiclass = "MULTICLASS"
,    Multilabel = "MULTILABEL"
}


// TextClassificationDatasetMetadata
/** 
 * Dataset metadata for classification.
**/
export class TextClassificationDatasetMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=classificationType" })
  classificationType?: TextClassificationDatasetMetadataClassificationTypeEnum;
}
