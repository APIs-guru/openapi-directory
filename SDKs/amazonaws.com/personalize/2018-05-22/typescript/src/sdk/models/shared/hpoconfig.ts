import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HyperParameterRanges } from "./hyperparameterranges";
import { HpoObjective } from "./hpoobjective";
import { HpoResourceConfig } from "./hporesourceconfig";


// HpoConfig
/** 
 * Describes the properties for hyperparameter optimization (HPO).
**/
export class HpoConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithmHyperParameterRanges" })
  algorithmHyperParameterRanges?: HyperParameterRanges;

  @Metadata({ data: "json, name=hpoObjective" })
  hpoObjective?: HpoObjective;

  @Metadata({ data: "json, name=hpoResourceConfig" })
  hpoResourceConfig?: HpoResourceConfig;
}
