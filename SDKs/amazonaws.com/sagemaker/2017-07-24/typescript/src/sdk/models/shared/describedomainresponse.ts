import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppNetworkAccessTypeEnum } from "./appnetworkaccesstypeenum";
import { AuthModeEnum } from "./authmodeenum";
import { UserSettings } from "./usersettings";
import { DomainStatusEnum } from "./domainstatusenum";


export class DescribeDomainResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppNetworkAccessType" })
  appNetworkAccessType?: AppNetworkAccessTypeEnum;

  @Metadata({ data: "json, name=AuthMode" })
  authMode?: AuthModeEnum;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DefaultUserSettings" })
  defaultUserSettings?: UserSettings;

  @Metadata({ data: "json, name=DomainArn" })
  domainArn?: string;

  @Metadata({ data: "json, name=DomainId" })
  domainId?: string;

  @Metadata({ data: "json, name=DomainName" })
  domainName?: string;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=HomeEfsFileSystemId" })
  homeEfsFileSystemId?: string;

  @Metadata({ data: "json, name=HomeEfsFileSystemKmsKeyId" })
  homeEfsFileSystemKmsKeyId?: string;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=SingleSignOnManagedApplicationInstanceId" })
  singleSignOnManagedApplicationInstanceId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: DomainStatusEnum;

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @Metadata({ data: "json, name=Url" })
  url?: string;

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
