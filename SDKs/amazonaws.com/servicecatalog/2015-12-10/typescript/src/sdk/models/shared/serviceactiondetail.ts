import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceActionSummary } from "./serviceactionsummary";


// ServiceActionDetail
/** 
 * An object containing detailed information about the self-service action.
**/
export class ServiceActionDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=Definition" })
  definition?: Map<string, string>;

  @Metadata({ data: "json, name=ServiceActionSummary" })
  serviceActionSummary?: ServiceActionSummary;
}
