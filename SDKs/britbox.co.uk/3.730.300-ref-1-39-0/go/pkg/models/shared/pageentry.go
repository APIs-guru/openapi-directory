package shared

type PageEntryTypeEnum string

const (
	PageEntryTypeEnumItemEntry       PageEntryTypeEnum = "ItemEntry"
	PageEntryTypeEnumItemDetailEntry PageEntryTypeEnum = "ItemDetailEntry"
	PageEntryTypeEnumListEntry       PageEntryTypeEnum = "ListEntry"
	PageEntryTypeEnumListDetailEntry PageEntryTypeEnum = "ListDetailEntry"
	PageEntryTypeEnumUserEntry       PageEntryTypeEnum = "UserEntry"
	PageEntryTypeEnumTextEntry       PageEntryTypeEnum = "TextEntry"
	PageEntryTypeEnumImageEntry      PageEntryTypeEnum = "ImageEntry"
	PageEntryTypeEnumCustomEntry     PageEntryTypeEnum = "CustomEntry"
	PageEntryTypeEnumPeopleEntry     PageEntryTypeEnum = "PeopleEntry"
)

type PageEntry struct {
	CustomFields map[string]interface{} `json:"customFields"`
	ID           string                 `json:"id"`
	Images       map[string]string      `json:"images"`
	Item         *ItemSummary           `json:"item"`
	List         *ItemList              `json:"list"`
	People       []Person               `json:"people"`
	Template     string                 `json:"template"`
	Text         *string                `json:"text"`
	Title        string                 `json:"title"`
	Type         PageEntryTypeEnum      `json:"type"`
}
