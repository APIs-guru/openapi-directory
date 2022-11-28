import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SpecsAutoCompleteResponse
/** 
 * Specs auto complete query response
**/
export class SpecsAutoCompleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=terms" })
  terms?: string[];
}
