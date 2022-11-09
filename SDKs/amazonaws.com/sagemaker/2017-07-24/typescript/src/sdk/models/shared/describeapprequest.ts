import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppTypeEnum } from "./apptypeenum";


export class DescribeAppRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppName" })
  appName: string;

  @Metadata({ data: "json, name=AppType" })
  appType: AppTypeEnum;

  @Metadata({ data: "json, name=DomainId" })
  domainId: string;

  @Metadata({ data: "json, name=UserProfileName" })
  userProfileName: string;
}
