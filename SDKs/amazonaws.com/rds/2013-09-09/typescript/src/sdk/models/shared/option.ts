import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSecurityGroupMembership } from "./dbsecuritygroupmembership";
import { OptionSetting } from "./optionsetting";
import { VpcSecurityGroupMembership } from "./vpcsecuritygroupmembership";



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
  permanent?: boolean;

  @SpeakeasyMetadata()
  persistent?: boolean;

  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata({ elemType: VpcSecurityGroupMembership })
  vpcSecurityGroupMemberships?: VpcSecurityGroupMembership[];
}
