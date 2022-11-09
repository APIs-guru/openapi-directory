import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserProfileStatusEnum } from "./userprofilestatusenum";
import { UserSettings } from "./usersettings";


export class DescribeUserProfileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DomainId" })
  domainId?: string;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=HomeEfsFileSystemUid" })
  homeEfsFileSystemUid?: string;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=SingleSignOnUserIdentifier" })
  singleSignOnUserIdentifier?: string;

  @Metadata({ data: "json, name=SingleSignOnUserValue" })
  singleSignOnUserValue?: string;

  @Metadata({ data: "json, name=Status" })
  status?: UserProfileStatusEnum;

  @Metadata({ data: "json, name=UserProfileArn" })
  userProfileArn?: string;

  @Metadata({ data: "json, name=UserProfileName" })
  userProfileName?: string;

  @Metadata({ data: "json, name=UserSettings" })
  userSettings?: UserSettings;
}
