from dataclasses import dataclass, field
from enum import Enum

class GrantOperationEnum(str, Enum):
    DECRYPT = "Decrypt"
    ENCRYPT = "Encrypt"
    GENERATE_DATA_KEY = "GenerateDataKey"
    GENERATE_DATA_KEY_WITHOUT_PLAINTEXT = "GenerateDataKeyWithoutPlaintext"
    RE_ENCRYPT_FROM = "ReEncryptFrom"
    RE_ENCRYPT_TO = "ReEncryptTo"
    SIGN = "Sign"
    VERIFY = "Verify"
    GET_PUBLIC_KEY = "GetPublicKey"
    CREATE_GRANT = "CreateGrant"
    RETIRE_GRANT = "RetireGrant"
    DESCRIBE_KEY = "DescribeKey"
    GENERATE_DATA_KEY_PAIR = "GenerateDataKeyPair"
    GENERATE_DATA_KEY_PAIR_WITHOUT_PLAINTEXT = "GenerateDataKeyPairWithoutPlaintext"

