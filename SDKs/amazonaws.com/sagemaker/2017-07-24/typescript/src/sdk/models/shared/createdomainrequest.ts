import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppNetworkAccessTypeEnum } from "./appnetworkaccesstypeenum";
import { AuthModeEnum } from "./authmodeenum";
import { UserSettings } from "./usersettings";
import { Tag } from "./tag";


export class CreateDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppNetworkAccessType" })
  appNetworkAccessType?: AppNetworkAccessTypeEnum;

  @Metadata({ data: "json, name=AuthMode" })
  authMode: AuthModeEnum;

  @Metadata({ data: "json, name=DefaultUserSettings" })
  defaultUserSettings: UserSettings;

  @Metadata({ data: "json, name=DomainName" })
  domainName: string;

  @Metadata({ data: "json, name=HomeEfsFileSystemKmsKeyId" })
  homeEfsFileSystemKmsKeyId?: string;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=VpcId" })
  vpcId: string;
}
