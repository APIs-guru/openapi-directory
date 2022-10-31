package shared




type StorageClassEnum string

const (
    StorageClassEnumStandard StorageClassEnum = "STANDARD"
StorageClassEnumReducedRedundancy StorageClassEnum = "REDUCED_REDUNDANCY"
StorageClassEnumStandardIa StorageClassEnum = "STANDARD_IA"
StorageClassEnumIntelligentTiering StorageClassEnum = "INTELLIGENT_TIERING"
StorageClassEnumDeepArchive StorageClassEnum = "DEEP_ARCHIVE"
StorageClassEnumOnezoneIa StorageClassEnum = "ONEZONE_IA"
StorageClassEnumGlacier StorageClassEnum = "GLACIER"
)


