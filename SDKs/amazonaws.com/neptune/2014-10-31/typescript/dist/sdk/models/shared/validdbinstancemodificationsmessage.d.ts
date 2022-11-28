import { SpeakeasyBase } from "../../../internal/utils";
import { ValidStorageOptions } from "./validstorageoptions";
/**
 * Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action. You can use this information when you call <a>ModifyDBInstance</a>.
**/
export declare class ValidDbInstanceModificationsMessage extends SpeakeasyBase {
    storage?: ValidStorageOptions[];
}
