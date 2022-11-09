import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeOrganizationConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoEnable" })
  autoEnable?: boolean;

  @Metadata({ data: "json, name=maxAccountLimitReached" })
  maxAccountLimitReached?: boolean;
}
