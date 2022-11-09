import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AnnotationValue
/** 
 * Value of a segment annotation. Has one of three value types: Number, Boolean, or String.
**/
export class AnnotationValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=BooleanValue" })
  booleanValue?: boolean;

  @Metadata({ data: "json, name=NumberValue" })
  numberValue?: number;

  @Metadata({ data: "json, name=StringValue" })
  stringValue?: string;
}
