import { SpeakeasyBase } from "../../../internal/utils";
import { CognitoMemberDefinition } from "./cognitomemberdefinition";
import { OidcMemberDefinition } from "./oidcmemberdefinition";
/**
 * Defines an Amazon Cognito or your own OIDC IdP user group that is part of a work team.
**/
export declare class MemberDefinition extends SpeakeasyBase {
    cognitoMemberDefinition?: CognitoMemberDefinition;
    oidcMemberDefinition?: OidcMemberDefinition;
}
