import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppNetworkAccessTypeEnum } from "./appnetworkaccesstypeenum";
import { AuthModeEnum } from "./authmodeenum";
import { UserSettings } from "./usersettings";
import { DomainStatusEnum } from "./domainstatusenum";



export class DescribeDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppNetworkAccessType" })
  appNetworkAccessType?: AppNetworkAccessTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=AuthMode" })
  authMode?: AuthModeEnum;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DefaultUserSettings" })
  defaultUserSettings?: UserSettings;

  @SpeakeasyMetadata({ data: "json, name=DomainArn" })
  domainArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainId" })
  domainId?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=HomeEfsFileSystemId" })
  homeEfsFileSystemId?: string;

  @SpeakeasyMetadata({ data: "json, name=HomeEfsFileSystemKmsKeyId" })
  homeEfsFileSystemKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=SingleSignOnManagedApplicationInstanceId" })
  singleSignOnManagedApplicationInstanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: DomainStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
