import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeOrganizationConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoEnable" })
  autoEnable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxAccountLimitReached" })
  maxAccountLimitReached?: boolean;
}
