import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppTypeEnum } from "./apptypeenum";
import { ResourceSpec } from "./resourcespec";
import { AppStatusEnum } from "./appstatusenum";



export class DescribeAppResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppArn" })
  appArn?: string;

  @SpeakeasyMetadata({ data: "json, name=AppName" })
  appName?: string;

  @SpeakeasyMetadata({ data: "json, name=AppType" })
  appType?: AppTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DomainId" })
  domainId?: string;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=LastHealthCheckTimestamp" })
  lastHealthCheckTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastUserActivityTimestamp" })
  lastUserActivityTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=ResourceSpec" })
  resourceSpec?: ResourceSpec;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: AppStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=UserProfileName" })
  userProfileName?: string;
}
