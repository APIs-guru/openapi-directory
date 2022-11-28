package shared

type StoreLayoutStoreLayoutTypeEnum string

const (
	StoreLayoutStoreLayoutTypeEnumUnknown StoreLayoutStoreLayoutTypeEnum = "unknown"
	StoreLayoutStoreLayoutTypeEnumBasic   StoreLayoutStoreLayoutTypeEnum = "basic"
	StoreLayoutStoreLayoutTypeEnumCustom  StoreLayoutStoreLayoutTypeEnum = "custom"
)

// StoreLayout
// General setting for the managed Google Play store layout, currently only specifying the page to display the first time the store is opened.
type StoreLayout struct {
	HomepageID      *string                         `json:"homepageId,omitempty"`
	StoreLayoutType *StoreLayoutStoreLayoutTypeEnum `json:"storeLayoutType,omitempty"`
}
