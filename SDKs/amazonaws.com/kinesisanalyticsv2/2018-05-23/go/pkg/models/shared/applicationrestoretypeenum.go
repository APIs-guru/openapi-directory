package shared




type ApplicationRestoreTypeEnum string

const (
    ApplicationRestoreTypeEnumSkipRestoreFromSnapshot ApplicationRestoreTypeEnum = "SKIP_RESTORE_FROM_SNAPSHOT"
ApplicationRestoreTypeEnumRestoreFromLatestSnapshot ApplicationRestoreTypeEnum = "RESTORE_FROM_LATEST_SNAPSHOT"
ApplicationRestoreTypeEnumRestoreFromCustomSnapshot ApplicationRestoreTypeEnum = "RESTORE_FROM_CUSTOM_SNAPSHOT"
)


