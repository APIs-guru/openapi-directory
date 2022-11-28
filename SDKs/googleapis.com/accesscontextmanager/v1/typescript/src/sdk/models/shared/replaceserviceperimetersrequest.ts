import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServicePerimeter } from "./serviceperimeter";



// ReplaceServicePerimetersRequest
/** 
 * A request to replace all existing Service Perimeters in an Access Policy with the Service Perimeters provided. This is done atomically.
**/
export class ReplaceServicePerimetersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=servicePerimeters", elemType: ServicePerimeter })
  servicePerimeters?: ServicePerimeter[];
}
