import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DbSecurityGroupMembership extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbSecurityGroupName?: string;

  @SpeakeasyMetadata()
  status?: string;
}
