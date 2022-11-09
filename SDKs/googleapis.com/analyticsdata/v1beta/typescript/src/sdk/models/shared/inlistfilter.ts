import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InListFilter
/** 
 * The result needs to be in a list of string values.
**/
export class InListFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
