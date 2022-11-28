import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateProvisioningParameter
/** 
 * The parameter key-value pair used to update a provisioned product.
**/
export class UpdateProvisioningParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=UsePreviousValue" })
  usePreviousValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
