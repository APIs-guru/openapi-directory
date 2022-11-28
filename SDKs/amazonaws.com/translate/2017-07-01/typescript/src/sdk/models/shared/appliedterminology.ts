import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Term } from "./term";



// AppliedTerminology
/** 
 * The custom terminology applied to the input text by Amazon Translate for the translated text response. This is optional in the response and will only be present if you specified terminology input in the request. Currently, only one terminology can be applied per TranslateText request.
**/
export class AppliedTerminology extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Terms", elemType: Term })
  terms?: Term[];
}
