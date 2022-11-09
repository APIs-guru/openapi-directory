import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiOperation } from "./apioperation";


// EgressTo
/** 
 * Defines the conditions under which an EgressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the `resources` specified. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. The request must match `operations` AND `resources` fields in order to be allowed egress out of the perimeter.
**/
export class EgressTo extends SpeakeasyBase {
  @Metadata({ data: "json, name=externalResources" })
  externalResources?: string[];

  @Metadata({ data: "json, name=operations", elemType: shared.ApiOperation })
  operations?: ApiOperation[];

  @Metadata({ data: "json, name=resources" })
  resources?: string[];
}
