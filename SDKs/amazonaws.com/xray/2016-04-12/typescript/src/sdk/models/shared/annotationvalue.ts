import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AnnotationValue
/** 
 * Value of a segment annotation. Has one of three value types: Number, Boolean, or String.
**/
export class AnnotationValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BooleanValue" })
  booleanValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=NumberValue" })
  numberValue?: number;

  @SpeakeasyMetadata({ data: "json, name=StringValue" })
  stringValue?: string;
}
