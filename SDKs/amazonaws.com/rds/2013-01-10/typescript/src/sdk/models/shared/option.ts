import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSecurityGroupMembership } from "./dbsecuritygroupmembership";
import { VpcSecurityGroupMembership } from "./vpcsecuritygroupmembership";



export class Option extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbSecurityGroupMembership })
  dbSecurityGroupMemberships?: DbSecurityGroupMembership[];

  @SpeakeasyMetadata()
  optionDescription?: string;

  @SpeakeasyMetadata()
  optionName?: string;

  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata({ elemType: VpcSecurityGroupMembership })
  vpcSecurityGroupMemberships?: VpcSecurityGroupMembership[];
}
