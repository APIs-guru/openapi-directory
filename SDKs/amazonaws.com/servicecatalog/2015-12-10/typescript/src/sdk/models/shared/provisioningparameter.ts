import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProvisioningParameter
/** 
 * Information about a parameter used to provision a product.
**/
export class ProvisioningParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
