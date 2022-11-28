import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserContext
/** 
 * Information about the user who created or modified an experiment, trial, trial component, or project.
**/
export class UserContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainId" })
  domainId?: string;

  @SpeakeasyMetadata({ data: "json, name=UserProfileArn" })
  userProfileArn?: string;

  @SpeakeasyMetadata({ data: "json, name=UserProfileName" })
  userProfileName?: string;
}
