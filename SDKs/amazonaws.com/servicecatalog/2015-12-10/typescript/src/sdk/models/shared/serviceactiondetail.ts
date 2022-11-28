import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceActionSummary } from "./serviceactionsummary";



// ServiceActionDetail
/** 
 * An object containing detailed information about the self-service action.
**/
export class ServiceActionDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Definition" })
  definition?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ServiceActionSummary" })
  serviceActionSummary?: ServiceActionSummary;
}
