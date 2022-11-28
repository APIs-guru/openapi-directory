import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociationStatusEnum } from "./associationstatusenum";



// ConnectionAliasAssociation
/** 
 * Describes a connection alias association that is used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
**/
export class ConnectionAliasAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociatedAccountId" })
  associatedAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=AssociationStatus" })
  associationStatus?: AssociationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ConnectionIdentifier" })
  connectionIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;
}
