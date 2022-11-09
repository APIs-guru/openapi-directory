import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OcrPhotoTextElement } from "./ocrphototextelement";
import { FormFieldDefinition } from "./formfielddefinition";


// FieldResult
/** 
 * A pairing target field and actual value read from form
**/
export class FieldResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=FieldValues", elemType: shared.OcrPhotoTextElement })
  fieldValues?: OcrPhotoTextElement[];

  @Metadata({ data: "json, name=TargetField" })
  targetField?: FormFieldDefinition;
}
