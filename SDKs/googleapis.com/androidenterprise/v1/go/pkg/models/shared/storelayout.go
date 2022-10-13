package shared

type StoreLayoutStoreLayoutTypeEnum string

const (
	StoreLayoutStoreLayoutTypeEnumUnknown StoreLayoutStoreLayoutTypeEnum = "unknown"
	StoreLayoutStoreLayoutTypeEnumBasic   StoreLayoutStoreLayoutTypeEnum = "basic"
	StoreLayoutStoreLayoutTypeEnumCustom  StoreLayoutStoreLayoutTypeEnum = "custom"
)

type StoreLayout struct {
	HomepageID      *string                         `json:"homepageId"`
	StoreLayoutType *StoreLayoutStoreLayoutTypeEnum `json:"storeLayoutType"`
}
