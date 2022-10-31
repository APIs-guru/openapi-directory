package shared




type KeySpecEnum string

const (
    KeySpecEnumRsa2048 KeySpecEnum = "RSA_2048"
KeySpecEnumRsa3072 KeySpecEnum = "RSA_3072"
KeySpecEnumRsa4096 KeySpecEnum = "RSA_4096"
KeySpecEnumEccNistP256 KeySpecEnum = "ECC_NIST_P256"
KeySpecEnumEccNistP384 KeySpecEnum = "ECC_NIST_P384"
KeySpecEnumEccNistP521 KeySpecEnum = "ECC_NIST_P521"
KeySpecEnumEccSecgP256K1 KeySpecEnum = "ECC_SECG_P256K1"
KeySpecEnumSymmetricDefault KeySpecEnum = "SYMMETRIC_DEFAULT"
)


