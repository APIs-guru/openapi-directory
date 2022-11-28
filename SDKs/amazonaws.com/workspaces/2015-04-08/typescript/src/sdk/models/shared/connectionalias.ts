import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionAliasAssociation } from "./connectionaliasassociation";
import { ConnectionAliasStateEnum } from "./connectionaliasstateenum";



// ConnectionAlias
/** 
 * Describes a connection alias. Connection aliases are used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
**/
export class ConnectionAlias extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AliasId" })
  aliasId?: string;

  @SpeakeasyMetadata({ data: "json, name=Associations", elemType: ConnectionAliasAssociation })
  associations?: ConnectionAliasAssociation[];

  @SpeakeasyMetadata({ data: "json, name=ConnectionString" })
  connectionString?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerAccountId" })
  ownerAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: ConnectionAliasStateEnum;
}
