import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OcrPhotoTextElement } from "./ocrphototextelement";
import { FormFieldDefinition } from "./formfielddefinition";



// FieldResult
/** 
 * A pairing target field and actual value read from form
**/
export class FieldResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FieldValues", elemType: OcrPhotoTextElement })
  fieldValues?: OcrPhotoTextElement[];

  @SpeakeasyMetadata({ data: "json, name=TargetField" })
  targetField?: FormFieldDefinition;
}
