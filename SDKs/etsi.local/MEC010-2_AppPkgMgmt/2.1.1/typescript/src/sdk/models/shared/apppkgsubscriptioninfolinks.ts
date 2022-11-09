import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LinkType } from "./linktype";


// AppPkgSubscriptionInfoLinks
/** 
 * Links to resources related to this resource.
**/
export class AppPkgSubscriptionInfoLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self: LinkType;
}
