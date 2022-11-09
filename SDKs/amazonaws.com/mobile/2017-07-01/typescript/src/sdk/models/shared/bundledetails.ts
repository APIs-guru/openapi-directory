import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlatformEnum } from "./platformenum";


// BundleDetails
/** 
 *  The details of the bundle. 
**/
export class BundleDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=availablePlatforms" })
  availablePlatforms?: PlatformEnum[];

  @Metadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=iconUrl" })
  iconUrl?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
