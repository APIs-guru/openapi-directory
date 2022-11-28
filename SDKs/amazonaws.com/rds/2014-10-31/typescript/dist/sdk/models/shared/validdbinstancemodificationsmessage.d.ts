import { SpeakeasyBase } from "../../../internal/utils";
import { ValidStorageOptions } from "./validstorageoptions";
import { AvailableProcessorFeature } from "./availableprocessorfeature";
/**
 * Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <code>DescribeValidDBInstanceModifications</code> action. You can use this information when you call <code>ModifyDBInstance</code>.
**/
export declare class ValidDbInstanceModificationsMessage extends SpeakeasyBase {
    storage?: ValidStorageOptions[];
    validProcessorFeatures?: AvailableProcessorFeature[];
}
