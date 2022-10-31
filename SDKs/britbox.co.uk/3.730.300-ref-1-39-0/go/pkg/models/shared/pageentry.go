package shared




type PageEntryTypeEnum string

const (
    PageEntryTypeEnumItemEntry PageEntryTypeEnum = "ItemEntry"
PageEntryTypeEnumItemDetailEntry PageEntryTypeEnum = "ItemDetailEntry"
PageEntryTypeEnumListEntry PageEntryTypeEnum = "ListEntry"
PageEntryTypeEnumListDetailEntry PageEntryTypeEnum = "ListDetailEntry"
PageEntryTypeEnumUserEntry PageEntryTypeEnum = "UserEntry"
PageEntryTypeEnumTextEntry PageEntryTypeEnum = "TextEntry"
PageEntryTypeEnumImageEntry PageEntryTypeEnum = "ImageEntry"
PageEntryTypeEnumCustomEntry PageEntryTypeEnum = "CustomEntry"
PageEntryTypeEnumPeopleEntry PageEntryTypeEnum = "PeopleEntry"
)


type PageEntry struct {
    CustomFields map[string]interface{} `json:"customFields,omitempty"`
    ID string `json:"id"`
    Images map[string]string `json:"images,omitempty"`
    Item *ItemSummary `json:"item,omitempty"`
    List *ItemList `json:"list,omitempty"`
    People []Person `json:"people,omitempty"`
    Template string `json:"template"`
    Text *string `json:"text,omitempty"`
    Title string `json:"title"`
    Type PageEntryTypeEnum `json:"type"`
    
}

