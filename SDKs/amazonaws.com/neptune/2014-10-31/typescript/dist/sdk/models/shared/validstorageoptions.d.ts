import { SpeakeasyBase } from "../../../internal/utils";
import { DoubleRange } from "./doublerange";
import { Range } from "./range";
/**
 * <p>Information about valid modifications that you can make to your DB instance.</p> <p>Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action.</p>
**/
export declare class ValidStorageOptions extends SpeakeasyBase {
    iopsToStorageRatio?: DoubleRange[];
    provisionedIops?: Range[];
    storageSize?: Range[];
    storageType?: string;
}
