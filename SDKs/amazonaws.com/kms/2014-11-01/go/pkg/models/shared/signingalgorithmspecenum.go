package shared

type SigningAlgorithmSpecEnum string

const (
	SigningAlgorithmSpecEnumRsassaPssSha256      SigningAlgorithmSpecEnum = "RSASSA_PSS_SHA_256"
	SigningAlgorithmSpecEnumRsassaPssSha384      SigningAlgorithmSpecEnum = "RSASSA_PSS_SHA_384"
	SigningAlgorithmSpecEnumRsassaPssSha512      SigningAlgorithmSpecEnum = "RSASSA_PSS_SHA_512"
	SigningAlgorithmSpecEnumRsassaPkcs1V15Sha256 SigningAlgorithmSpecEnum = "RSASSA_PKCS1_V1_5_SHA_256"
	SigningAlgorithmSpecEnumRsassaPkcs1V15Sha384 SigningAlgorithmSpecEnum = "RSASSA_PKCS1_V1_5_SHA_384"
	SigningAlgorithmSpecEnumRsassaPkcs1V15Sha512 SigningAlgorithmSpecEnum = "RSASSA_PKCS1_V1_5_SHA_512"
	SigningAlgorithmSpecEnumEcdsaSha256          SigningAlgorithmSpecEnum = "ECDSA_SHA_256"
	SigningAlgorithmSpecEnumEcdsaSha384          SigningAlgorithmSpecEnum = "ECDSA_SHA_384"
	SigningAlgorithmSpecEnumEcdsaSha512          SigningAlgorithmSpecEnum = "ECDSA_SHA_512"
)
