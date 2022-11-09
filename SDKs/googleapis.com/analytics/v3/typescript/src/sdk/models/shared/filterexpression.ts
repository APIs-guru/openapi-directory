import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FilterExpression
/** 
 * JSON template for an Analytics filter expression.
**/
export class FilterExpression extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @Metadata({ data: "json, name=expressionValue" })
  expressionValue?: string;

  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=fieldIndex" })
  fieldIndex?: number;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=matchType" })
  matchType?: string;
}
