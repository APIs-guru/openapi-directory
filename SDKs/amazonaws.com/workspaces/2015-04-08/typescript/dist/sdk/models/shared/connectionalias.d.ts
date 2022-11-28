import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionAliasAssociation } from "./connectionaliasassociation";
import { ConnectionAliasStateEnum } from "./connectionaliasstateenum";
/**
 * Describes a connection alias. Connection aliases are used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
**/
export declare class ConnectionAlias extends SpeakeasyBase {
    aliasId?: string;
    associations?: ConnectionAliasAssociation[];
    connectionString?: string;
    ownerAccountId?: string;
    state?: ConnectionAliasStateEnum;
}
