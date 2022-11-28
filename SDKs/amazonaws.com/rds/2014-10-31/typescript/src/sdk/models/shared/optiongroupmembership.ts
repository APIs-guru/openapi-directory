import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OptionGroupMembership
/** 
 * Provides information on the option groups the DB instance is a member of.
**/
export class OptionGroupMembership extends SpeakeasyBase {
  @SpeakeasyMetadata()
  optionGroupName?: string;

  @SpeakeasyMetadata()
  status?: string;
}
