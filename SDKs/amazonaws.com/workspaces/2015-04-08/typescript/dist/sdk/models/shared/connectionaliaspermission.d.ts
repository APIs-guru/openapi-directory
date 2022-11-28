import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the permissions for a connection alias. Connection aliases are used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
**/
export declare class ConnectionAliasPermission extends SpeakeasyBase {
    allowAssociation: boolean;
    sharedAccountId: string;
}
