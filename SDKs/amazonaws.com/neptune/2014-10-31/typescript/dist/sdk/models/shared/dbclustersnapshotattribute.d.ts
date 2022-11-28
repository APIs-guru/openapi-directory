import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains the name and values of a manual DB cluster snapshot attribute.</p> <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
**/
export declare class DbClusterSnapshotAttribute extends SpeakeasyBase {
    attributeName?: string;
    attributeValues?: string[];
}
