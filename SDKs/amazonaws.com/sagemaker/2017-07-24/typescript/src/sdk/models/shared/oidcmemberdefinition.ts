import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OidcMemberDefinition
/** 
 * A list of user groups that exist in your OIDC Identity Provider (IdP). One to ten groups can be used to create a single private work team. When you add a user group to the list of <code>Groups</code>, you can add that user group to one or more private work teams. If you add a user group to a private work team, all workers in that user group are added to the work team.
**/
export class OidcMemberDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Groups" })
  groups: string[];
}
