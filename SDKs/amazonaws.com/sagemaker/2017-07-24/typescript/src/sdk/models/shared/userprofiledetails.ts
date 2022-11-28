import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserProfileStatusEnum } from "./userprofilestatusenum";



// UserProfileDetails
/** 
 * The user profile details.
**/
export class UserProfileDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DomainId" })
  domainId?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: UserProfileStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=UserProfileName" })
  userProfileName?: string;
}
