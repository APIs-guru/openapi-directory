import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserProfileStatusEnum } from "./userprofilestatusenum";


// UserProfileDetails
/** 
 * The user profile details.
**/
export class UserProfileDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DomainId" })
  domainId?: string;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: UserProfileStatusEnum;

  @Metadata({ data: "json, name=UserProfileName" })
  userProfileName?: string;
}
