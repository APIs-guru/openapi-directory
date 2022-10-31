package shared




type IPAddressStatusEnum string

const (
    IPAddressStatusEnumCreating IPAddressStatusEnum = "CREATING"
IPAddressStatusEnumFailedCreation IPAddressStatusEnum = "FAILED_CREATION"
IPAddressStatusEnumAttaching IPAddressStatusEnum = "ATTACHING"
IPAddressStatusEnumAttached IPAddressStatusEnum = "ATTACHED"
IPAddressStatusEnumRemapDetaching IPAddressStatusEnum = "REMAP_DETACHING"
IPAddressStatusEnumRemapAttaching IPAddressStatusEnum = "REMAP_ATTACHING"
IPAddressStatusEnumDetaching IPAddressStatusEnum = "DETACHING"
IPAddressStatusEnumFailedResourceGone IPAddressStatusEnum = "FAILED_RESOURCE_GONE"
IPAddressStatusEnumDeleting IPAddressStatusEnum = "DELETING"
IPAddressStatusEnumDeleteFailedFasExpired IPAddressStatusEnum = "DELETE_FAILED_FAS_EXPIRED"
)


