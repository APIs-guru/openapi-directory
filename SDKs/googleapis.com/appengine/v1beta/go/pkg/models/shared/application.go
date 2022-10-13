package shared

type ApplicationDatabaseTypeEnum string

const (
	ApplicationDatabaseTypeEnumDatabaseTypeUnspecified     ApplicationDatabaseTypeEnum = "DATABASE_TYPE_UNSPECIFIED"
	ApplicationDatabaseTypeEnumCloudDatastore              ApplicationDatabaseTypeEnum = "CLOUD_DATASTORE"
	ApplicationDatabaseTypeEnumCloudFirestore              ApplicationDatabaseTypeEnum = "CLOUD_FIRESTORE"
	ApplicationDatabaseTypeEnumCloudDatastoreCompatibility ApplicationDatabaseTypeEnum = "CLOUD_DATASTORE_COMPATIBILITY"
)

type ApplicationServingStatusEnum string

const (
	ApplicationServingStatusEnumUnspecified    ApplicationServingStatusEnum = "UNSPECIFIED"
	ApplicationServingStatusEnumServing        ApplicationServingStatusEnum = "SERVING"
	ApplicationServingStatusEnumUserDisabled   ApplicationServingStatusEnum = "USER_DISABLED"
	ApplicationServingStatusEnumSystemDisabled ApplicationServingStatusEnum = "SYSTEM_DISABLED"
)

type Application struct {
	AuthDomain              *string                       `json:"authDomain"`
	CodeBucket              *string                       `json:"codeBucket"`
	DatabaseType            *ApplicationDatabaseTypeEnum  `json:"databaseType"`
	DefaultBucket           *string                       `json:"defaultBucket"`
	DefaultCookieExpiration *string                       `json:"defaultCookieExpiration"`
	DefaultHostname         *string                       `json:"defaultHostname"`
	DispatchRules           []URLDispatchRule             `json:"dispatchRules"`
	FeatureSettings         *FeatureSettings              `json:"featureSettings"`
	GcrDomain               *string                       `json:"gcrDomain"`
	Iap                     *IdentityAwareProxy           `json:"iap"`
	ID                      *string                       `json:"id"`
	LocationID              *string                       `json:"locationId"`
	Name                    *string                       `json:"name"`
	ServiceAccount          *string                       `json:"serviceAccount"`
	ServingStatus           *ApplicationServingStatusEnum `json:"servingStatus"`
}
