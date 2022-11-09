import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LinkType } from "./linktype";


// AppPkgNotificationLinks
/** 
 * Links to resources related to this resource.
**/
export class AppPkgNotificationLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=subscription" })
  subscription: LinkType;
}
