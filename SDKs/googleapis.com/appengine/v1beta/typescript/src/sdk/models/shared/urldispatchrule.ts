import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UrlDispatchRule
/** 
 * Rules to match an HTTP request and dispatch that request to a service.
**/
export class UrlDispatchRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;
}
