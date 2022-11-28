import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Configuration } from "./configuration";



// CustomerListConfigurationsResponse
/** 
 * Response message of customer's listing configuration.
**/
export class CustomerListConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configurations", elemType: Configuration })
  configurations?: Configuration[];
}
