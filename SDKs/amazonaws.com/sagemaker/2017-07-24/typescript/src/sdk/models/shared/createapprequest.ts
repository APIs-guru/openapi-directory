import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppTypeEnum } from "./apptypeenum";
import { ResourceSpec } from "./resourcespec";
import { Tag } from "./tag";


export class CreateAppRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppName" })
  appName: string;

  @Metadata({ data: "json, name=AppType" })
  appType: AppTypeEnum;

  @Metadata({ data: "json, name=DomainId" })
  domainId: string;

  @Metadata({ data: "json, name=ResourceSpec" })
  resourceSpec?: ResourceSpec;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=UserProfileName" })
  userProfileName: string;
}
