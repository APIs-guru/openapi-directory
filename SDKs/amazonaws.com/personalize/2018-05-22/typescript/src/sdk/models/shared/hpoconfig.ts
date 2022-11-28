import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterRanges } from "./hyperparameterranges";
import { HpoObjective } from "./hpoobjective";
import { HpoResourceConfig } from "./hporesourceconfig";



// HpoConfig
/** 
 * Describes the properties for hyperparameter optimization (HPO).
**/
export class HpoConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithmHyperParameterRanges" })
  algorithmHyperParameterRanges?: HyperParameterRanges;

  @SpeakeasyMetadata({ data: "json, name=hpoObjective" })
  hpoObjective?: HpoObjective;

  @SpeakeasyMetadata({ data: "json, name=hpoResourceConfig" })
  hpoResourceConfig?: HpoResourceConfig;
}
