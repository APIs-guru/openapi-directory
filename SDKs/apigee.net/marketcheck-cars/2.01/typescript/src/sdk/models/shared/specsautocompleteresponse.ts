import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SpecsAutoCompleteResponse
/** 
 * Specs auto complete query response
**/
export class SpecsAutoCompleteResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=terms" })
  terms?: string[];
}
