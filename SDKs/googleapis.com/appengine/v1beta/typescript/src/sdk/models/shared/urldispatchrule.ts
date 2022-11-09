import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UrlDispatchRule
/** 
 * Rules to match an HTTP request and dispatch that request to a service.
**/
export class UrlDispatchRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=service" })
  service?: string;
}
