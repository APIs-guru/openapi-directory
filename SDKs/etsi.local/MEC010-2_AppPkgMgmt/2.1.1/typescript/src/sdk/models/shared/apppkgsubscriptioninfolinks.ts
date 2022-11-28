import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinkType } from "./linktype";



// AppPkgSubscriptionInfoLinks
/** 
 * Links to resources related to this resource.
**/
export class AppPkgSubscriptionInfoLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinkType;
}
