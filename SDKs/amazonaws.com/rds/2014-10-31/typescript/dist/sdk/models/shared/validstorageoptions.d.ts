import { SpeakeasyBase } from "../../../internal/utils";
import { DoubleRange } from "./doublerange";
import { Range } from "./range";
/**
 * Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <code>DescribeValidDBInstanceModifications</code> action.
**/
export declare class ValidStorageOptions extends SpeakeasyBase {
    iopsToStorageRatio?: DoubleRange[];
    provisionedIops?: Range[];
    storageSize?: Range[];
    storageType?: string;
    supportsStorageAutoscaling?: boolean;
}
