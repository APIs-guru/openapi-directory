package shared



type HparamSearchSpaces struct {
    ActivationFn *StringHparamSearchSpace `json:"activationFn,omitempty"`
    BatchSize *IntHparamSearchSpace `json:"batchSize,omitempty"`
    BoosterType *StringHparamSearchSpace `json:"boosterType,omitempty"`
    ColsampleBylevel *DoubleHparamSearchSpace `json:"colsampleBylevel,omitempty"`
    ColsampleBynode *DoubleHparamSearchSpace `json:"colsampleBynode,omitempty"`
    ColsampleBytree *DoubleHparamSearchSpace `json:"colsampleBytree,omitempty"`
    DartNormalizeType *StringHparamSearchSpace `json:"dartNormalizeType,omitempty"`
    Dropout *DoubleHparamSearchSpace `json:"dropout,omitempty"`
    HiddenUnits *IntArrayHparamSearchSpace `json:"hiddenUnits,omitempty"`
    L1Reg *DoubleHparamSearchSpace `json:"l1Reg,omitempty"`
    L2Reg *DoubleHparamSearchSpace `json:"l2Reg,omitempty"`
    LearnRate *DoubleHparamSearchSpace `json:"learnRate,omitempty"`
    MaxTreeDepth *IntHparamSearchSpace `json:"maxTreeDepth,omitempty"`
    MinSplitLoss *DoubleHparamSearchSpace `json:"minSplitLoss,omitempty"`
    MinTreeChildWeight *IntHparamSearchSpace `json:"minTreeChildWeight,omitempty"`
    NumClusters *IntHparamSearchSpace `json:"numClusters,omitempty"`
    NumFactors *IntHparamSearchSpace `json:"numFactors,omitempty"`
    NumParallelTree *IntHparamSearchSpace `json:"numParallelTree,omitempty"`
    Optimizer *StringHparamSearchSpace `json:"optimizer,omitempty"`
    Subsample *DoubleHparamSearchSpace `json:"subsample,omitempty"`
    TreeMethod *StringHparamSearchSpace `json:"treeMethod,omitempty"`
    WalsAlpha *DoubleHparamSearchSpace `json:"walsAlpha,omitempty"`
    
}

