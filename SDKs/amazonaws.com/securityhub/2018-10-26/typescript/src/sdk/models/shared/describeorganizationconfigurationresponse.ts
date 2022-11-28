import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeOrganizationConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoEnable" })
  autoEnable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MemberAccountLimitReached" })
  memberAccountLimitReached?: boolean;
}
