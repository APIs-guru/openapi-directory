import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoMlConfig } from "./automlconfig";
import { HpoConfig } from "./hpoconfig";
import { OptimizationObjective } from "./optimizationobjective";



// SolutionConfig
/** 
 * Describes the configuration properties for the solution.
**/
export class SolutionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithmHyperParameters" })
  algorithmHyperParameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=autoMLConfig" })
  autoMlConfig?: AutoMlConfig;

  @SpeakeasyMetadata({ data: "json, name=eventValueThreshold" })
  eventValueThreshold?: string;

  @SpeakeasyMetadata({ data: "json, name=featureTransformationParameters" })
  featureTransformationParameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=hpoConfig" })
  hpoConfig?: HpoConfig;

  @SpeakeasyMetadata({ data: "json, name=optimizationObjective" })
  optimizationObjective?: OptimizationObjective;
}
