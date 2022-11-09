import { SpeakeasyBase } from "../../../internal/utils/utils";
import { OcrPhotoTextElement } from "./ocrphototextelement";
import { FormFieldDefinition } from "./formfielddefinition";
/**
 * A pairing target field and actual value read from form
**/
export declare class FieldResult extends SpeakeasyBase {
    fieldValues?: OcrPhotoTextElement[];
    targetField?: FormFieldDefinition;
}
