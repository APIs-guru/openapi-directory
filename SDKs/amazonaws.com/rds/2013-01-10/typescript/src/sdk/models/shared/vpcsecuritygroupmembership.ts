import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VpcSecurityGroupMembership extends SpeakeasyBase {
  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  vpcSecurityGroupId?: string;
}
