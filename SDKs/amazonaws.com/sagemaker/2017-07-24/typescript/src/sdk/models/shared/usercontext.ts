import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserContext
/** 
 * Information about the user who created or modified an experiment, trial, trial component, or project.
**/
export class UserContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainId" })
  domainId?: string;

  @Metadata({ data: "json, name=UserProfileArn" })
  userProfileArn?: string;

  @Metadata({ data: "json, name=UserProfileName" })
  userProfileName?: string;
}
