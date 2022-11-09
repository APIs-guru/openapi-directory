import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PatchSource
/** 
 * Information about the patches to use to update the instances, including target operating systems and source repository. Applies to Linux instances only.
**/
export class PatchSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=Configuration" })
  configuration: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Products" })
  products: string[];
}
