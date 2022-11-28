import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbClusterSnapshotAttribute
/** 
 * <p>Contains the name and values of a manual DB cluster snapshot attribute.</p> <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
**/
export class DbClusterSnapshotAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attributeName?: string;

  @SpeakeasyMetadata()
  attributeValues?: string[];
}
