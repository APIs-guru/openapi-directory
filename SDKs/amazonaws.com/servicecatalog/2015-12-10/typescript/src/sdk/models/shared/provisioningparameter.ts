import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProvisioningParameter
/** 
 * Information about a parameter used to provision a product.
**/
export class ProvisioningParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
