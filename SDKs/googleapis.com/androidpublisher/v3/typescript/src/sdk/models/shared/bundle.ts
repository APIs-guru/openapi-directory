import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Bundle
/** 
 * Information about an app bundle. The resource for BundlesService.
**/
export class Bundle extends SpeakeasyBase {
  @Metadata({ data: "json, name=sha1" })
  sha1?: string;

  @Metadata({ data: "json, name=sha256" })
  sha256?: string;

  @Metadata({ data: "json, name=versionCode" })
  versionCode?: number;
}
