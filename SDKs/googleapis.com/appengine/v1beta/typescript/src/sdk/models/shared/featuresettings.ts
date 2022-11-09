import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FeatureSettings
/** 
 * The feature specific settings to be used in the application. These define behaviors that are user configurable.
**/
export class FeatureSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=splitHealthChecks" })
  splitHealthChecks?: boolean;

  @Metadata({ data: "json, name=useContainerOptimizedOs" })
  useContainerOptimizedOs?: boolean;
}
