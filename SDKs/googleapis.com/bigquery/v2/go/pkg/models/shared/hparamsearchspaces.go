package shared

type HparamSearchSpaces struct {
	ActivationFn       *StringHparamSearchSpace   `json:"activationFn"`
	BatchSize          *IntHparamSearchSpace      `json:"batchSize"`
	BoosterType        *StringHparamSearchSpace   `json:"boosterType"`
	ColsampleBylevel   *DoubleHparamSearchSpace   `json:"colsampleBylevel"`
	ColsampleBynode    *DoubleHparamSearchSpace   `json:"colsampleBynode"`
	ColsampleBytree    *DoubleHparamSearchSpace   `json:"colsampleBytree"`
	DartNormalizeType  *StringHparamSearchSpace   `json:"dartNormalizeType"`
	Dropout            *DoubleHparamSearchSpace   `json:"dropout"`
	HiddenUnits        *IntArrayHparamSearchSpace `json:"hiddenUnits"`
	L1Reg              *DoubleHparamSearchSpace   `json:"l1Reg"`
	L2Reg              *DoubleHparamSearchSpace   `json:"l2Reg"`
	LearnRate          *DoubleHparamSearchSpace   `json:"learnRate"`
	MaxTreeDepth       *IntHparamSearchSpace      `json:"maxTreeDepth"`
	MinSplitLoss       *DoubleHparamSearchSpace   `json:"minSplitLoss"`
	MinTreeChildWeight *IntHparamSearchSpace      `json:"minTreeChildWeight"`
	NumClusters        *IntHparamSearchSpace      `json:"numClusters"`
	NumFactors         *IntHparamSearchSpace      `json:"numFactors"`
	NumParallelTree    *IntHparamSearchSpace      `json:"numParallelTree"`
	Optimizer          *StringHparamSearchSpace   `json:"optimizer"`
	Subsample          *DoubleHparamSearchSpace   `json:"subsample"`
	TreeMethod         *StringHparamSearchSpace   `json:"treeMethod"`
	WalsAlpha          *DoubleHparamSearchSpace   `json:"walsAlpha"`
}
