import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OptionVersion
/** 
 * The version for an option. Option group option versions are returned by the <code>DescribeOptionGroupOptions</code> action.
**/
export class OptionVersion extends SpeakeasyBase {
  @SpeakeasyMetadata()
  isDefault?: boolean;

  @SpeakeasyMetadata()
  version?: string;
}
