import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PatchSource
/** 
 * Information about the patches to use to update the instances, including target operating systems and source repository. Applies to Linux instances only.
**/
export class PatchSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Configuration" })
  configuration: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Products" })
  products: string[];
}
