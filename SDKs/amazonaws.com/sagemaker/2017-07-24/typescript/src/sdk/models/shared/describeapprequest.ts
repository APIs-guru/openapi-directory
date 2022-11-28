import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppTypeEnum } from "./apptypeenum";



export class DescribeAppRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppName" })
  appName: string;

  @SpeakeasyMetadata({ data: "json, name=AppType" })
  appType: AppTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=DomainId" })
  domainId: string;

  @SpeakeasyMetadata({ data: "json, name=UserProfileName" })
  userProfileName: string;
}
