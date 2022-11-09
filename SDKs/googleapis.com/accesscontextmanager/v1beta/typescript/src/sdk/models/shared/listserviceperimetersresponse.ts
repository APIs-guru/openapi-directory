import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServicePerimeter } from "./serviceperimeter";


// ListServicePerimetersResponse
/** 
 * A response to `ListServicePerimetersRequest`.
**/
export class ListServicePerimetersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=servicePerimeters", elemType: shared.ServicePerimeter })
  servicePerimeters?: ServicePerimeter[];
}
