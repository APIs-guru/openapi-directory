package shared




type LeadsSortByEnum string

const (
    LeadsSortByEnumCreatedAt LeadsSortByEnum = "created_at"
LeadsSortByEnumUpdatedAt LeadsSortByEnum = "updated_at"
LeadsSortByEnumName LeadsSortByEnum = "name"
LeadsSortByEnumFirstName LeadsSortByEnum = "first_name"
LeadsSortByEnumLastName LeadsSortByEnum = "last_name"
LeadsSortByEnumEmail LeadsSortByEnum = "email"
)


type LeadsSort struct {
    By *LeadsSortByEnum `queryParam:"name=by"`
    Direction *SortDirectionEnum `queryParam:"name=direction"`
    
}

