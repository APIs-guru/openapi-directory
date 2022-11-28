import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KernelSpec
/** 
 * The specification of a Jupyter kernel.
**/
export class KernelSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
