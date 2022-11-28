import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppNetworkAccessTypeEnum } from "./appnetworkaccesstypeenum";
import { AuthModeEnum } from "./authmodeenum";
import { UserSettings } from "./usersettings";
import { Tag } from "./tag";



export class CreateDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppNetworkAccessType" })
  appNetworkAccessType?: AppNetworkAccessTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=AuthMode" })
  authMode: AuthModeEnum;

  @SpeakeasyMetadata({ data: "json, name=DefaultUserSettings" })
  defaultUserSettings: UserSettings;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=HomeEfsFileSystemKmsKeyId" })
  homeEfsFileSystemKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId: string;
}
