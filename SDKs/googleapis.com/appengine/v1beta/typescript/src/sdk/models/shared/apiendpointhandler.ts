import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApiEndpointHandler
/** 
 * Uses Google Cloud Endpoints to handle requests.
**/
export class ApiEndpointHandler extends SpeakeasyBase {
  @Metadata({ data: "json, name=scriptPath" })
  scriptPath?: string;
}
