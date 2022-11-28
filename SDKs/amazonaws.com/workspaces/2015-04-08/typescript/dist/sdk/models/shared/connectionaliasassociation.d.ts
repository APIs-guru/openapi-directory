import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationStatusEnum } from "./associationstatusenum";
/**
 * Describes a connection alias association that is used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
**/
export declare class ConnectionAliasAssociation extends SpeakeasyBase {
    associatedAccountId?: string;
    associationStatus?: AssociationStatusEnum;
    connectionIdentifier?: string;
    resourceId?: string;
}
