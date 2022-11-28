import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains the name and values of a manual DB snapshot attribute</p> <p>Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code> API.</p>
**/
export declare class DbSnapshotAttribute extends SpeakeasyBase {
    attributeName?: string;
    attributeValues?: string[];
}
