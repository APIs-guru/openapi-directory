import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppTypeEnum } from "./apptypeenum";
import { ResourceSpec } from "./resourcespec";
import { Tag } from "./tag";



export class CreateAppRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppName" })
  appName: string;

  @SpeakeasyMetadata({ data: "json, name=AppType" })
  appType: AppTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=DomainId" })
  domainId: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceSpec" })
  resourceSpec?: ResourceSpec;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=UserProfileName" })
  userProfileName: string;
}
