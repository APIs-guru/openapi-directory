import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoMlConfig } from "./automlconfig";
import { HpoConfig } from "./hpoconfig";
import { OptimizationObjective } from "./optimizationobjective";


// SolutionConfig
/** 
 * Describes the configuration properties for the solution.
**/
export class SolutionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithmHyperParameters" })
  algorithmHyperParameters?: Map<string, string>;

  @Metadata({ data: "json, name=autoMLConfig" })
  autoMlConfig?: AutoMlConfig;

  @Metadata({ data: "json, name=eventValueThreshold" })
  eventValueThreshold?: string;

  @Metadata({ data: "json, name=featureTransformationParameters" })
  featureTransformationParameters?: Map<string, string>;

  @Metadata({ data: "json, name=hpoConfig" })
  hpoConfig?: HpoConfig;

  @Metadata({ data: "json, name=optimizationObjective" })
  optimizationObjective?: OptimizationObjective;
}
