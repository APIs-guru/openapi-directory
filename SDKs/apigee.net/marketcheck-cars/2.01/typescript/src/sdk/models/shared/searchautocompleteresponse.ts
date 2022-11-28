import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchAutoCompleteResponseTerms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: string;
}


// SearchAutoCompleteResponse
/** 
 * Search auto complete query response
**/
export class SearchAutoCompleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=terms", elemType: SearchAutoCompleteResponseTerms })
  terms?: SearchAutoCompleteResponseTerms[];
}
