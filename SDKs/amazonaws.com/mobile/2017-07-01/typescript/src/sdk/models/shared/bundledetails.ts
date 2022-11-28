import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlatformEnum } from "./platformenum";



// BundleDetails
/** 
 *  The details of the bundle. 
**/
export class BundleDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availablePlatforms" })
  availablePlatforms?: PlatformEnum[];

  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=iconUrl" })
  iconUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
