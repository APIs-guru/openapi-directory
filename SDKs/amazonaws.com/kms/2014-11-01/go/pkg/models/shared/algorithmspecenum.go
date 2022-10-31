package shared

type AlgorithmSpecEnum string

const (
	AlgorithmSpecEnumRsaesPkcs1V15   AlgorithmSpecEnum = "RSAES_PKCS1_V1_5"
	AlgorithmSpecEnumRsaesOaepSha1   AlgorithmSpecEnum = "RSAES_OAEP_SHA_1"
	AlgorithmSpecEnumRsaesOaepSha256 AlgorithmSpecEnum = "RSAES_OAEP_SHA_256"
)
