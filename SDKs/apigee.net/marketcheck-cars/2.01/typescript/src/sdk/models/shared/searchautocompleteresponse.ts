import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchAutoCompleteResponseTerms extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=item" })
  item?: string;
}


// SearchAutoCompleteResponse
/** 
 * Search auto complete query response
**/
export class SearchAutoCompleteResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=terms", elemType: shared.SearchAutoCompleteResponseTerms })
  terms?: SearchAutoCompleteResponseTerms[];
}
