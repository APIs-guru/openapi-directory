package shared




type SourceTypeEnum string

const (
    SourceTypeEnumGit SourceTypeEnum = "git"
SourceTypeEnumSvn SourceTypeEnum = "svn"
SourceTypeEnumArchive SourceTypeEnum = "archive"
SourceTypeEnumS3 SourceTypeEnum = "s3"
)


