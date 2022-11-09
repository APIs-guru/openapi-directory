import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Configuration } from "./configuration";


// CustomerListConfigurationsResponse
/** 
 * Response message of customer's listing configuration.
**/
export class CustomerListConfigurationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configurations", elemType: shared.Configuration })
  configurations?: Configuration[];
}
