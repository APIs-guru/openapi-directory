import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FeatureSettings
/** 
 * The feature specific settings to be used in the application. These define behaviors that are user configurable.
**/
export class FeatureSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=splitHealthChecks" })
  splitHealthChecks?: boolean;

  @SpeakeasyMetadata({ data: "json, name=useContainerOptimizedOs" })
  useContainerOptimizedOs?: boolean;
}
