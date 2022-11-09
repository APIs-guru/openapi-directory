import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KernelSpec
/** 
 * The specification of a Jupyter kernel.
**/
export class KernelSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
