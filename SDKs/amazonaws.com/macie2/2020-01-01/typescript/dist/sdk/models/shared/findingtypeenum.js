export var FindingTypeEnum;
(function (FindingTypeEnum) {
    FindingTypeEnum["SensitiveDataS3ObjectMultiple"] = "SensitiveData:S3Object/Multiple";
    FindingTypeEnum["SensitiveDataS3ObjectFinancial"] = "SensitiveData:S3Object/Financial";
    FindingTypeEnum["SensitiveDataS3ObjectPersonal"] = "SensitiveData:S3Object/Personal";
    FindingTypeEnum["SensitiveDataS3ObjectCredentials"] = "SensitiveData:S3Object/Credentials";
    FindingTypeEnum["SensitiveDataS3ObjectCustomIdentifier"] = "SensitiveData:S3Object/CustomIdentifier";
    FindingTypeEnum["PolicyIamUserS3BucketPublic"] = "Policy:IAMUser/S3BucketPublic";
    FindingTypeEnum["PolicyIamUserS3BucketSharedExternally"] = "Policy:IAMUser/S3BucketSharedExternally";
    FindingTypeEnum["PolicyIamUserS3BucketReplicatedExternally"] = "Policy:IAMUser/S3BucketReplicatedExternally";
    FindingTypeEnum["PolicyIamUserS3BucketEncryptionDisabled"] = "Policy:IAMUser/S3BucketEncryptionDisabled";
    FindingTypeEnum["PolicyIamUserS3BlockPublicAccessDisabled"] = "Policy:IAMUser/S3BlockPublicAccessDisabled";
})(FindingTypeEnum || (FindingTypeEnum = {}));
