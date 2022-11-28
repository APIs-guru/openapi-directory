import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InListFilter
/** 
 * The result needs to be in a list of string values.
**/
export class InListFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
