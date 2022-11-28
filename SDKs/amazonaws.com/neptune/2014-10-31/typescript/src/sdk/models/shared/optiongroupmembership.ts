import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OptionGroupMembership
/** 
 * Not supported by Neptune.
**/
export class OptionGroupMembership extends SpeakeasyBase {
  @SpeakeasyMetadata()
  optionGroupName?: string;

  @SpeakeasyMetadata()
  status?: string;
}
