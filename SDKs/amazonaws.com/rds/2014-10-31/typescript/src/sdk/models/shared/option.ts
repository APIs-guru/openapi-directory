import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSecurityGroupMembership } from "./dbsecuritygroupmembership";
import { OptionSetting } from "./optionsetting";
import { VpcSecurityGroupMembership } from "./vpcsecuritygroupmembership";



// Option
/** 
 * Option details.
**/
export class Option extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbSecurityGroupMembership })
  dbSecurityGroupMemberships?: DbSecurityGroupMembership[];

  @SpeakeasyMetadata()
  optionDescription?: string;

  @SpeakeasyMetadata()
  optionName?: string;

  @SpeakeasyMetadata({ elemType: OptionSetting })
  optionSettings?: OptionSetting[];

  @SpeakeasyMetadata()
  optionVersion?: string;

  @SpeakeasyMetadata()
  permanent?: boolean;

  @SpeakeasyMetadata()
  persistent?: boolean;

  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata({ elemType: VpcSecurityGroupMembership })
  vpcSecurityGroupMemberships?: VpcSecurityGroupMembership[];
}
