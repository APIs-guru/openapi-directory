import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SoftwarePackage
/** 
 * Information about a software package.
**/
export class SoftwarePackage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Architecture" })
  architecture?: string;

  @Metadata({ data: "json, name=Epoch" })
  epoch?: string;

  @Metadata({ data: "json, name=FilePath" })
  filePath?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PackageManager" })
  packageManager?: string;

  @Metadata({ data: "json, name=Release" })
  release?: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
