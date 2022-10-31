package shared



type AlgorithmVersionInfoList struct {
    FileKeyAlgorithms []AlgorithmVersionInfo `json:"fileKeyAlgorithms"`
    KeyPairAlgorithms []AlgorithmVersionInfo `json:"keyPairAlgorithms"`
    
}

