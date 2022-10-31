package shared

type ContactsSortByEnum string

const (
	ContactsSortByEnumCreatedAt ContactsSortByEnum = "created_at"
	ContactsSortByEnumUpdatedAt ContactsSortByEnum = "updated_at"
	ContactsSortByEnumName      ContactsSortByEnum = "name"
	ContactsSortByEnumFirstName ContactsSortByEnum = "first_name"
	ContactsSortByEnumLastName  ContactsSortByEnum = "last_name"
	ContactsSortByEnumEmail     ContactsSortByEnum = "email"
)

type ContactsSort struct {
	By        *ContactsSortByEnum `queryParam:"name=by"`
	Direction *SortDirectionEnum  `queryParam:"name=direction"`
}
