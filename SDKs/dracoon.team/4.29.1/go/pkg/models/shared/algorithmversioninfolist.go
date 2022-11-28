package shared

// AlgorithmVersionInfoList
// Information of all available algorithms
type AlgorithmVersionInfoList struct {
	FileKeyAlgorithms []AlgorithmVersionInfo `json:"fileKeyAlgorithms"`
	KeyPairAlgorithms []AlgorithmVersionInfo `json:"keyPairAlgorithms"`
}
