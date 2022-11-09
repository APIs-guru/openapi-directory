import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsRdsDbOptionGroupMembership
/** 
 * An option group membership.
**/
export class AwsRdsDbOptionGroupMembership extends SpeakeasyBase {
  @Metadata({ data: "json, name=OptionGroupName" })
  optionGroupName?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
