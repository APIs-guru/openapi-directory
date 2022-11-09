import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppTypeEnum } from "./apptypeenum";
import { ResourceSpec } from "./resourcespec";
import { AppStatusEnum } from "./appstatusenum";


export class DescribeAppResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppArn" })
  appArn?: string;

  @Metadata({ data: "json, name=AppName" })
  appName?: string;

  @Metadata({ data: "json, name=AppType" })
  appType?: AppTypeEnum;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DomainId" })
  domainId?: string;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=LastHealthCheckTimestamp" })
  lastHealthCheckTimestamp?: Date;

  @Metadata({ data: "json, name=LastUserActivityTimestamp" })
  lastUserActivityTimestamp?: Date;

  @Metadata({ data: "json, name=ResourceSpec" })
  resourceSpec?: ResourceSpec;

  @Metadata({ data: "json, name=Status" })
  status?: AppStatusEnum;

  @Metadata({ data: "json, name=UserProfileName" })
  userProfileName?: string;
}
