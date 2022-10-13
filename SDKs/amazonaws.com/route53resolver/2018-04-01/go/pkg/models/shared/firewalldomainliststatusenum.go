package shared

type FirewallDomainListStatusEnum string

const (
	FirewallDomainListStatusEnumComplete             FirewallDomainListStatusEnum = "COMPLETE"
	FirewallDomainListStatusEnumCompleteImportFailed FirewallDomainListStatusEnum = "COMPLETE_IMPORT_FAILED"
	FirewallDomainListStatusEnumImporting            FirewallDomainListStatusEnum = "IMPORTING"
	FirewallDomainListStatusEnumDeleting             FirewallDomainListStatusEnum = "DELETING"
	FirewallDomainListStatusEnumUpdating             FirewallDomainListStatusEnum = "UPDATING"
)
