import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StringHparamSearchSpace } from "./stringhparamsearchspace";
import { IntHparamSearchSpace } from "./inthparamsearchspace";
import { StringHparamSearchSpace } from "./stringhparamsearchspace";
import { DoubleHparamSearchSpace } from "./doublehparamsearchspace";
import { DoubleHparamSearchSpace } from "./doublehparamsearchspace";
import { DoubleHparamSearchSpace } from "./doublehparamsearchspace";
import { StringHparamSearchSpace } from "./stringhparamsearchspace";
import { DoubleHparamSearchSpace } from "./doublehparamsearchspace";
import { IntArrayHparamSearchSpace } from "./intarrayhparamsearchspace";
import { DoubleHparamSearchSpace } from "./doublehparamsearchspace";
import { DoubleHparamSearchSpace } from "./doublehparamsearchspace";
import { DoubleHparamSearchSpace } from "./doublehparamsearchspace";
import { IntHparamSearchSpace } from "./inthparamsearchspace";
import { DoubleHparamSearchSpace } from "./doublehparamsearchspace";
import { IntHparamSearchSpace } from "./inthparamsearchspace";
import { IntHparamSearchSpace } from "./inthparamsearchspace";
import { IntHparamSearchSpace } from "./inthparamsearchspace";
import { IntHparamSearchSpace } from "./inthparamsearchspace";
import { StringHparamSearchSpace } from "./stringhparamsearchspace";
import { DoubleHparamSearchSpace } from "./doublehparamsearchspace";
import { StringHparamSearchSpace } from "./stringhparamsearchspace";
import { DoubleHparamSearchSpace } from "./doublehparamsearchspace";


// HparamSearchSpaces
/** 
 * Hyperparameter search spaces. These should be a subset of training_options.
**/
export class HparamSearchSpaces extends SpeakeasyBase {
  @Metadata({ data: "json, name=activationFn" })
  activationFn?: StringHparamSearchSpace;

  @Metadata({ data: "json, name=batchSize" })
  batchSize?: IntHparamSearchSpace;

  @Metadata({ data: "json, name=boosterType" })
  boosterType?: StringHparamSearchSpace;

  @Metadata({ data: "json, name=colsampleBylevel" })
  colsampleBylevel?: DoubleHparamSearchSpace;

  @Metadata({ data: "json, name=colsampleBynode" })
  colsampleBynode?: DoubleHparamSearchSpace;

  @Metadata({ data: "json, name=colsampleBytree" })
  colsampleBytree?: DoubleHparamSearchSpace;

  @Metadata({ data: "json, name=dartNormalizeType" })
  dartNormalizeType?: StringHparamSearchSpace;

  @Metadata({ data: "json, name=dropout" })
  dropout?: DoubleHparamSearchSpace;

  @Metadata({ data: "json, name=hiddenUnits" })
  hiddenUnits?: IntArrayHparamSearchSpace;

  @Metadata({ data: "json, name=l1Reg" })
  l1Reg?: DoubleHparamSearchSpace;

  @Metadata({ data: "json, name=l2Reg" })
  l2Reg?: DoubleHparamSearchSpace;

  @Metadata({ data: "json, name=learnRate" })
  learnRate?: DoubleHparamSearchSpace;

  @Metadata({ data: "json, name=maxTreeDepth" })
  maxTreeDepth?: IntHparamSearchSpace;

  @Metadata({ data: "json, name=minSplitLoss" })
  minSplitLoss?: DoubleHparamSearchSpace;

  @Metadata({ data: "json, name=minTreeChildWeight" })
  minTreeChildWeight?: IntHparamSearchSpace;

  @Metadata({ data: "json, name=numClusters" })
  numClusters?: IntHparamSearchSpace;

  @Metadata({ data: "json, name=numFactors" })
  numFactors?: IntHparamSearchSpace;

  @Metadata({ data: "json, name=numParallelTree" })
  numParallelTree?: IntHparamSearchSpace;

  @Metadata({ data: "json, name=optimizer" })
  optimizer?: StringHparamSearchSpace;

  @Metadata({ data: "json, name=subsample" })
  subsample?: DoubleHparamSearchSpace;

  @Metadata({ data: "json, name=treeMethod" })
  treeMethod?: StringHparamSearchSpace;

  @Metadata({ data: "json, name=walsAlpha" })
  walsAlpha?: DoubleHparamSearchSpace;
}
