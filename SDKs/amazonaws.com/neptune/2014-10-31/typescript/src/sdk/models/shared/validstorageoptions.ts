import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DoubleRange } from "./doublerange";
import { Range } from "./range";



// ValidStorageOptions
/** 
 * <p>Information about valid modifications that you can make to your DB instance.</p> <p>Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action.</p>
**/
export class ValidStorageOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DoubleRange })
  iopsToStorageRatio?: DoubleRange[];

  @SpeakeasyMetadata({ elemType: Range })
  provisionedIops?: Range[];

  @SpeakeasyMetadata({ elemType: Range })
  storageSize?: Range[];

  @SpeakeasyMetadata()
  storageType?: string;
}
