import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CognitoMemberDefinition } from "./cognitomemberdefinition";
import { OidcMemberDefinition } from "./oidcmemberdefinition";


// MemberDefinition
/** 
 * Defines an Amazon Cognito or your own OIDC IdP user group that is part of a work team.
**/
export class MemberDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=CognitoMemberDefinition" })
  cognitoMemberDefinition?: CognitoMemberDefinition;

  @Metadata({ data: "json, name=OidcMemberDefinition" })
  oidcMemberDefinition?: OidcMemberDefinition;
}
