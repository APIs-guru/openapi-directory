import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StringHparamSearchSpace } from "./stringhparamsearchspace";
import { IntHparamSearchSpace } from "./inthparamsearchspace";
import { DoubleHparamSearchSpace } from "./doublehparamsearchspace";
import { IntArrayHparamSearchSpace } from "./intarrayhparamsearchspace";



// HparamSearchSpaces
/** 
 * Hyperparameter search spaces. These should be a subset of training_options.
**/
export class HparamSearchSpaces extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activationFn" })
  activationFn?: StringHparamSearchSpace;

  @SpeakeasyMetadata({ data: "json, name=batchSize" })
  batchSize?: IntHparamSearchSpace;

  @SpeakeasyMetadata({ data: "json, name=boosterType" })
  boosterType?: StringHparamSearchSpace;

  @SpeakeasyMetadata({ data: "json, name=colsampleBylevel" })
  colsampleBylevel?: DoubleHparamSearchSpace;

  @SpeakeasyMetadata({ data: "json, name=colsampleBynode" })
  colsampleBynode?: DoubleHparamSearchSpace;

  @SpeakeasyMetadata({ data: "json, name=colsampleBytree" })
  colsampleBytree?: DoubleHparamSearchSpace;

  @SpeakeasyMetadata({ data: "json, name=dartNormalizeType" })
  dartNormalizeType?: StringHparamSearchSpace;

  @SpeakeasyMetadata({ data: "json, name=dropout" })
  dropout?: DoubleHparamSearchSpace;

  @SpeakeasyMetadata({ data: "json, name=hiddenUnits" })
  hiddenUnits?: IntArrayHparamSearchSpace;

  @SpeakeasyMetadata({ data: "json, name=l1Reg" })
  l1Reg?: DoubleHparamSearchSpace;

  @SpeakeasyMetadata({ data: "json, name=l2Reg" })
  l2Reg?: DoubleHparamSearchSpace;

  @SpeakeasyMetadata({ data: "json, name=learnRate" })
  learnRate?: DoubleHparamSearchSpace;

  @SpeakeasyMetadata({ data: "json, name=maxTreeDepth" })
  maxTreeDepth?: IntHparamSearchSpace;

  @SpeakeasyMetadata({ data: "json, name=minSplitLoss" })
  minSplitLoss?: DoubleHparamSearchSpace;

  @SpeakeasyMetadata({ data: "json, name=minTreeChildWeight" })
  minTreeChildWeight?: IntHparamSearchSpace;

  @SpeakeasyMetadata({ data: "json, name=numClusters" })
  numClusters?: IntHparamSearchSpace;

  @SpeakeasyMetadata({ data: "json, name=numFactors" })
  numFactors?: IntHparamSearchSpace;

  @SpeakeasyMetadata({ data: "json, name=numParallelTree" })
  numParallelTree?: IntHparamSearchSpace;

  @SpeakeasyMetadata({ data: "json, name=optimizer" })
  optimizer?: StringHparamSearchSpace;

  @SpeakeasyMetadata({ data: "json, name=subsample" })
  subsample?: DoubleHparamSearchSpace;

  @SpeakeasyMetadata({ data: "json, name=treeMethod" })
  treeMethod?: StringHparamSearchSpace;

  @SpeakeasyMetadata({ data: "json, name=walsAlpha" })
  walsAlpha?: DoubleHparamSearchSpace;
}
