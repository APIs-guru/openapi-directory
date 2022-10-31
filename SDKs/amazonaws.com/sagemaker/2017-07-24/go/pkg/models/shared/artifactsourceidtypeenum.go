package shared




type ArtifactSourceIDTypeEnum string

const (
    ArtifactSourceIDTypeEnumMd5Hash ArtifactSourceIDTypeEnum = "MD5Hash"
ArtifactSourceIDTypeEnumS3ETag ArtifactSourceIDTypeEnum = "S3ETag"
ArtifactSourceIDTypeEnumS3Version ArtifactSourceIDTypeEnum = "S3Version"
ArtifactSourceIDTypeEnumCustom ArtifactSourceIDTypeEnum = "Custom"
)


