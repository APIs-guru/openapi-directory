import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LinkType } from "./linktype";
import { LinkType } from "./linktype";
import { LinkType } from "./linktype";


// AppPkgInfoLinks
/** 
 * Links to resources related to this resource.
**/
export class AppPkgInfoLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=appD" })
  appD: LinkType;

  @Metadata({ data: "json, name=appPkgContent" })
  appPkgContent: LinkType;

  @Metadata({ data: "json, name=self" })
  self: LinkType;
}
