import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DoubleRange } from "./doublerange";
import { Range } from "./range";



// ValidStorageOptions
/** 
 * Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <code>DescribeValidDBInstanceModifications</code> action. 
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

  @SpeakeasyMetadata()
  supportsStorageAutoscaling?: boolean;
}
