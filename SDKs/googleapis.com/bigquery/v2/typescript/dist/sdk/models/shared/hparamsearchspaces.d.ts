import { SpeakeasyBase } from "../../../internal/utils";
import { StringHparamSearchSpace } from "./stringhparamsearchspace";
import { IntHparamSearchSpace } from "./inthparamsearchspace";
import { DoubleHparamSearchSpace } from "./doublehparamsearchspace";
import { IntArrayHparamSearchSpace } from "./intarrayhparamsearchspace";
/**
 * Hyperparameter search spaces. These should be a subset of training_options.
**/
export declare class HparamSearchSpaces extends SpeakeasyBase {
    activationFn?: StringHparamSearchSpace;
    batchSize?: IntHparamSearchSpace;
    boosterType?: StringHparamSearchSpace;
    colsampleBylevel?: DoubleHparamSearchSpace;
    colsampleBynode?: DoubleHparamSearchSpace;
    colsampleBytree?: DoubleHparamSearchSpace;
    dartNormalizeType?: StringHparamSearchSpace;
    dropout?: DoubleHparamSearchSpace;
    hiddenUnits?: IntArrayHparamSearchSpace;
    l1Reg?: DoubleHparamSearchSpace;
    l2Reg?: DoubleHparamSearchSpace;
    learnRate?: DoubleHparamSearchSpace;
    maxTreeDepth?: IntHparamSearchSpace;
    minSplitLoss?: DoubleHparamSearchSpace;
    minTreeChildWeight?: IntHparamSearchSpace;
    numClusters?: IntHparamSearchSpace;
    numFactors?: IntHparamSearchSpace;
    numParallelTree?: IntHparamSearchSpace;
    optimizer?: StringHparamSearchSpace;
    subsample?: DoubleHparamSearchSpace;
    treeMethod?: StringHparamSearchSpace;
    walsAlpha?: DoubleHparamSearchSpace;
}
