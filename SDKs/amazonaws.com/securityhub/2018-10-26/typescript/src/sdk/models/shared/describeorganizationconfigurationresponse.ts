import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeOrganizationConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoEnable" })
  autoEnable?: boolean;

  @Metadata({ data: "json, name=MemberAccountLimitReached" })
  memberAccountLimitReached?: boolean;
}
