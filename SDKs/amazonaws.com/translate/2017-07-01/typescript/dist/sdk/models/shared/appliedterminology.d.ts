import { SpeakeasyBase } from "../../../internal/utils";
import { Term } from "./term";
/**
 * The custom terminology applied to the input text by Amazon Translate for the translated text response. This is optional in the response and will only be present if you specified terminology input in the request. Currently, only one terminology can be applied per TranslateText request.
**/
export declare class AppliedTerminology extends SpeakeasyBase {
    name?: string;
    terms?: Term[];
}
