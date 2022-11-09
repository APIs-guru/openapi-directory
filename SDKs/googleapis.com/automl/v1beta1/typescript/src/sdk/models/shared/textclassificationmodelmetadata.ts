import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TextClassificationModelMetadataClassificationTypeEnum {
    ClassificationTypeUnspecified = "CLASSIFICATION_TYPE_UNSPECIFIED"
,    Multiclass = "MULTICLASS"
,    Multilabel = "MULTILABEL"
}


// TextClassificationModelMetadata
/** 
 * Model metadata that is specific to text classification.
**/
export class TextClassificationModelMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=classificationType" })
  classificationType?: TextClassificationModelMetadataClassificationTypeEnum;
}
