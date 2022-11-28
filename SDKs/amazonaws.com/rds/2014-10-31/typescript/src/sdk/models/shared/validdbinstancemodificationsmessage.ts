import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValidStorageOptions } from "./validstorageoptions";
import { AvailableProcessorFeature } from "./availableprocessorfeature";



// ValidDbInstanceModificationsMessage
/** 
 * Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <code>DescribeValidDBInstanceModifications</code> action. You can use this information when you call <code>ModifyDBInstance</code>. 
**/
export class ValidDbInstanceModificationsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ValidStorageOptions })
  storage?: ValidStorageOptions[];

  @SpeakeasyMetadata({ elemType: AvailableProcessorFeature })
  validProcessorFeatures?: AvailableProcessorFeature[];
}
