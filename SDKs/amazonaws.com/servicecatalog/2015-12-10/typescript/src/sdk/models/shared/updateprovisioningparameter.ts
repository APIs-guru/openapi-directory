import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateProvisioningParameter
/** 
 * The parameter key-value pair used to update a provisioned product.
**/
export class UpdateProvisioningParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=UsePreviousValue" })
  usePreviousValue?: boolean;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
