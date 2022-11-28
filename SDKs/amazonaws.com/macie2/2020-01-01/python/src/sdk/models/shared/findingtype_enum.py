from dataclasses import dataclass, field
from enum import Enum

class FindingTypeEnum(str, Enum):
    SENSITIVE_DATA_S3_OBJECT_MULTIPLE = "SensitiveData:S3Object/Multiple"
    SENSITIVE_DATA_S3_OBJECT_FINANCIAL = "SensitiveData:S3Object/Financial"
    SENSITIVE_DATA_S3_OBJECT_PERSONAL = "SensitiveData:S3Object/Personal"
    SENSITIVE_DATA_S3_OBJECT_CREDENTIALS = "SensitiveData:S3Object/Credentials"
    SENSITIVE_DATA_S3_OBJECT_CUSTOM_IDENTIFIER = "SensitiveData:S3Object/CustomIdentifier"
    POLICY_IAM_USER_S3_BUCKET_PUBLIC = "Policy:IAMUser/S3BucketPublic"
    POLICY_IAM_USER_S3_BUCKET_SHARED_EXTERNALLY = "Policy:IAMUser/S3BucketSharedExternally"
    POLICY_IAM_USER_S3_BUCKET_REPLICATED_EXTERNALLY = "Policy:IAMUser/S3BucketReplicatedExternally"
    POLICY_IAM_USER_S3_BUCKET_ENCRYPTION_DISABLED = "Policy:IAMUser/S3BucketEncryptionDisabled"
    POLICY_IAM_USER_S3_BLOCK_PUBLIC_ACCESS_DISABLED = "Policy:IAMUser/S3BlockPublicAccessDisabled"

