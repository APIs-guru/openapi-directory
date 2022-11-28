import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsRdsDbOptionGroupMembership
/** 
 * An option group membership.
**/
export class AwsRdsDbOptionGroupMembership extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OptionGroupName" })
  optionGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
