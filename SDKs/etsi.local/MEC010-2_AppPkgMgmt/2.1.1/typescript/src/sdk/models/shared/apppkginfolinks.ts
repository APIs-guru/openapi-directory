import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinkType } from "./linktype";



// AppPkgInfoLinks
/** 
 * Links to resources related to this resource.
**/
export class AppPkgInfoLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appD" })
  appD: LinkType;

  @SpeakeasyMetadata({ data: "json, name=appPkgContent" })
  appPkgContent: LinkType;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinkType;
}
