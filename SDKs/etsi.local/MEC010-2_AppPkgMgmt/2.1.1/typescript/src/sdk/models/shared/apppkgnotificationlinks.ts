import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinkType } from "./linktype";



// AppPkgNotificationLinks
/** 
 * Links to resources related to this resource.
**/
export class AppPkgNotificationLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription: LinkType;
}
