import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FilterExpression
/** 
 * JSON template for an Analytics filter expression.
**/
export class FilterExpression extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expressionValue" })
  expressionValue?: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldIndex" })
  fieldIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=matchType" })
  matchType?: string;
}
