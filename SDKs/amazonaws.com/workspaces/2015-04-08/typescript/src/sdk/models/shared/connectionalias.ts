import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectionAliasAssociation } from "./connectionaliasassociation";
import { ConnectionAliasStateEnum } from "./connectionaliasstateenum";


// ConnectionAlias
/** 
 * Describes a connection alias. Connection aliases are used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
**/
export class ConnectionAlias extends SpeakeasyBase {
  @Metadata({ data: "json, name=AliasId" })
  aliasId?: string;

  @Metadata({ data: "json, name=Associations", elemType: shared.ConnectionAliasAssociation })
  associations?: ConnectionAliasAssociation[];

  @Metadata({ data: "json, name=ConnectionString" })
  connectionString?: string;

  @Metadata({ data: "json, name=OwnerAccountId" })
  ownerAccountId?: string;

  @Metadata({ data: "json, name=State" })
  state?: ConnectionAliasStateEnum;
}
