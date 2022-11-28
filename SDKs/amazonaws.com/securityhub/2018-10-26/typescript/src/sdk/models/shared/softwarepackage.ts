import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SoftwarePackage
/** 
 * Information about a software package.
**/
export class SoftwarePackage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Architecture" })
  architecture?: string;

  @SpeakeasyMetadata({ data: "json, name=Epoch" })
  epoch?: string;

  @SpeakeasyMetadata({ data: "json, name=FilePath" })
  filePath?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PackageManager" })
  packageManager?: string;

  @SpeakeasyMetadata({ data: "json, name=Release" })
  release?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
