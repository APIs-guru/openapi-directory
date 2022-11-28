package shared

type DataShareStatusEnum string

const (
	DataShareStatusEnumActive               DataShareStatusEnum = "ACTIVE"
	DataShareStatusEnumPendingAuthorization DataShareStatusEnum = "PENDING_AUTHORIZATION"
	DataShareStatusEnumAuthorized           DataShareStatusEnum = "AUTHORIZED"
	DataShareStatusEnumDeauthorized         DataShareStatusEnum = "DEAUTHORIZED"
	DataShareStatusEnumRejected             DataShareStatusEnum = "REJECTED"
	DataShareStatusEnumAvailable            DataShareStatusEnum = "AVAILABLE"
)
