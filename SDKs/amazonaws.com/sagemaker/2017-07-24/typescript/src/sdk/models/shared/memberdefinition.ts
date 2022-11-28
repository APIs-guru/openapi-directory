import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CognitoMemberDefinition } from "./cognitomemberdefinition";
import { OidcMemberDefinition } from "./oidcmemberdefinition";



// MemberDefinition
/** 
 * Defines an Amazon Cognito or your own OIDC IdP user group that is part of a work team.
**/
export class MemberDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CognitoMemberDefinition" })
  cognitoMemberDefinition?: CognitoMemberDefinition;

  @SpeakeasyMetadata({ data: "json, name=OidcMemberDefinition" })
  oidcMemberDefinition?: OidcMemberDefinition;
}
