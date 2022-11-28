import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserProfileStatusEnum } from "./userprofilestatusenum";
import { UserSettings } from "./usersettings";



export class DescribeUserProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DomainId" })
  domainId?: string;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=HomeEfsFileSystemUid" })
  homeEfsFileSystemUid?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=SingleSignOnUserIdentifier" })
  singleSignOnUserIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=SingleSignOnUserValue" })
  singleSignOnUserValue?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: UserProfileStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=UserProfileArn" })
  userProfileArn?: string;

  @SpeakeasyMetadata({ data: "json, name=UserProfileName" })
  userProfileName?: string;

  @SpeakeasyMetadata({ data: "json, name=UserSettings" })
  userSettings?: UserSettings;
}
