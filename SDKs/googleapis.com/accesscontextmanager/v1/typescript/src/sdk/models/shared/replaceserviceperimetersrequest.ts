import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServicePerimeter } from "./serviceperimeter";


// ReplaceServicePerimetersRequest
/** 
 * A request to replace all existing Service Perimeters in an Access Policy with the Service Perimeters provided. This is done atomically.
**/
export class ReplaceServicePerimetersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=servicePerimeters", elemType: shared.ServicePerimeter })
  servicePerimeters?: ServicePerimeter[];
}
