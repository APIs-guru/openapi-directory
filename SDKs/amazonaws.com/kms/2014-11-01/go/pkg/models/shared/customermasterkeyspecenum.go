package shared




type CustomerMasterKeySpecEnum string

const (
    CustomerMasterKeySpecEnumRsa2048 CustomerMasterKeySpecEnum = "RSA_2048"
CustomerMasterKeySpecEnumRsa3072 CustomerMasterKeySpecEnum = "RSA_3072"
CustomerMasterKeySpecEnumRsa4096 CustomerMasterKeySpecEnum = "RSA_4096"
CustomerMasterKeySpecEnumEccNistP256 CustomerMasterKeySpecEnum = "ECC_NIST_P256"
CustomerMasterKeySpecEnumEccNistP384 CustomerMasterKeySpecEnum = "ECC_NIST_P384"
CustomerMasterKeySpecEnumEccNistP521 CustomerMasterKeySpecEnum = "ECC_NIST_P521"
CustomerMasterKeySpecEnumEccSecgP256K1 CustomerMasterKeySpecEnum = "ECC_SECG_P256K1"
CustomerMasterKeySpecEnumSymmetricDefault CustomerMasterKeySpecEnum = "SYMMETRIC_DEFAULT"
)


