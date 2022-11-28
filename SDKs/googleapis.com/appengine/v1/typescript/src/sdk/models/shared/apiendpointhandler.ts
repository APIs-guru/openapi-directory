import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApiEndpointHandler
/** 
 * Uses Google Cloud Endpoints to handle requests.
**/
export class ApiEndpointHandler extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scriptPath" })
  scriptPath?: string;
}
