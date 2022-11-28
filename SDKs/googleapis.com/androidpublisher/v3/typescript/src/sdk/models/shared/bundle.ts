import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Bundle
/** 
 * Information about an app bundle. The resource for BundlesService.
**/
export class Bundle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sha1" })
  sha1?: string;

  @SpeakeasyMetadata({ data: "json, name=sha256" })
  sha256?: string;

  @SpeakeasyMetadata({ data: "json, name=versionCode" })
  versionCode?: number;
}
