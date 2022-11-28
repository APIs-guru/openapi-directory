import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BetweenFilter } from "./betweenfilter";
import { InListFilter } from "./inlistfilter";
import { NumericFilter } from "./numericfilter";
import { StringFilter } from "./stringfilter";



// Filter
/** 
 * An expression to filter dimension or metric values.
**/
export class Filter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=betweenFilter" })
  betweenFilter?: BetweenFilter;

  @SpeakeasyMetadata({ data: "json, name=fieldName" })
  fieldName?: string;

  @SpeakeasyMetadata({ data: "json, name=inListFilter" })
  inListFilter?: InListFilter;

  @SpeakeasyMetadata({ data: "json, name=numericFilter" })
  numericFilter?: NumericFilter;

  @SpeakeasyMetadata({ data: "json, name=stringFilter" })
  stringFilter?: StringFilter;
}
