import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConnectionAliasPermission
/** 
 * Describes the permissions for a connection alias. Connection aliases are used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
**/
export class ConnectionAliasPermission extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowAssociation" })
  allowAssociation: boolean;

  @Metadata({ data: "json, name=SharedAccountId" })
  sharedAccountId: string;
}
