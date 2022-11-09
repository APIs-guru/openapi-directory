import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BetweenFilter } from "./betweenfilter";
import { InListFilter } from "./inlistfilter";
import { NumericFilter } from "./numericfilter";
import { StringFilter } from "./stringfilter";


// Filter
/** 
 * An expression to filter dimension or metric values.
**/
export class Filter extends SpeakeasyBase {
  @Metadata({ data: "json, name=betweenFilter" })
  betweenFilter?: BetweenFilter;

  @Metadata({ data: "json, name=fieldName" })
  fieldName?: string;

  @Metadata({ data: "json, name=inListFilter" })
  inListFilter?: InListFilter;

  @Metadata({ data: "json, name=numericFilter" })
  numericFilter?: NumericFilter;

  @Metadata({ data: "json, name=stringFilter" })
  stringFilter?: StringFilter;
}
