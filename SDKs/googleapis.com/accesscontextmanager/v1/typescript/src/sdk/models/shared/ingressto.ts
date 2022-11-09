import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiOperation } from "./apioperation";


// IngressTo
/** 
 * Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the target resource of the request. The request must satisfy what is defined in `operations` AND `resources` in order to match.
**/
export class IngressTo extends SpeakeasyBase {
  @Metadata({ data: "json, name=operations", elemType: shared.ApiOperation })
  operations?: ApiOperation[];

  @Metadata({ data: "json, name=resources" })
  resources?: string[];
}
