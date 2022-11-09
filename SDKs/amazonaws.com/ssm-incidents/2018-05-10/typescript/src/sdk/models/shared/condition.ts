import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttributeValueList } from "./attributevaluelist";


// Condition
/** 
 * A conditional statement with which to compare a value, after a timestamp, before a timestamp, or equal to a string or integer. If multiple conditions are specified, the conditionals become an <code>AND</code>ed statement. If multiple values are specified for a conditional, the values are <code>OR</code>d.
**/
export class Condition extends SpeakeasyBase {
  @Metadata({ data: "json, name=after" })
  after?: Date;

  @Metadata({ data: "json, name=before" })
  before?: Date;

  @Metadata({ data: "json, name=equals" })
  equals?: AttributeValueList;
}
