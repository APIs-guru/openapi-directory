from dataclasses import dataclass, field
from typing import Enum

class CustomerMasterKeySpecEnum(str, Enum):
    RSA_2048 = "RSA_2048"
    RSA_3072 = "RSA_3072"
    RSA_4096 = "RSA_4096"
    ECC_NIST_P256 = "ECC_NIST_P256"
    ECC_NIST_P384 = "ECC_NIST_P384"
    ECC_NIST_P521 = "ECC_NIST_P521"
    ECC_SECG_P256_K1 = "ECC_SECG_P256K1"
    SYMMETRIC_DEFAULT = "SYMMETRIC_DEFAULT"

