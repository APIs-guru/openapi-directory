import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ImageClassificationDatasetMetadataClassificationTypeEnum {
    ClassificationTypeUnspecified = "CLASSIFICATION_TYPE_UNSPECIFIED"
,    Multiclass = "MULTICLASS"
,    Multilabel = "MULTILABEL"
}


// ImageClassificationDatasetMetadata
/** 
 * Dataset metadata that is specific to image classification.
**/
export class ImageClassificationDatasetMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=classificationType" })
  classificationType?: ImageClassificationDatasetMetadataClassificationTypeEnum;
}
