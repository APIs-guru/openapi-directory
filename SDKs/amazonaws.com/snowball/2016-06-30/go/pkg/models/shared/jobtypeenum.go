package shared




type JobTypeEnum string

const (
    JobTypeEnumImport JobTypeEnum = "IMPORT"
JobTypeEnumExport JobTypeEnum = "EXPORT"
JobTypeEnumLocalUse JobTypeEnum = "LOCAL_USE"
)


