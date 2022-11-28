import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServicePerimeter } from "./serviceperimeter";



// ListServicePerimetersResponse
/** 
 * A response to `ListServicePerimetersRequest`.
**/
export class ListServicePerimetersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=servicePerimeters", elemType: ServicePerimeter })
  servicePerimeters?: ServicePerimeter[];
}
