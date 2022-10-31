package shared




type ApplicationDatabaseTypeEnum string

const (
    ApplicationDatabaseTypeEnumDatabaseTypeUnspecified ApplicationDatabaseTypeEnum = "DATABASE_TYPE_UNSPECIFIED"
ApplicationDatabaseTypeEnumCloudDatastore ApplicationDatabaseTypeEnum = "CLOUD_DATASTORE"
ApplicationDatabaseTypeEnumCloudFirestore ApplicationDatabaseTypeEnum = "CLOUD_FIRESTORE"
ApplicationDatabaseTypeEnumCloudDatastoreCompatibility ApplicationDatabaseTypeEnum = "CLOUD_DATASTORE_COMPATIBILITY"
)



type ApplicationServingStatusEnum string

const (
    ApplicationServingStatusEnumUnspecified ApplicationServingStatusEnum = "UNSPECIFIED"
ApplicationServingStatusEnumServing ApplicationServingStatusEnum = "SERVING"
ApplicationServingStatusEnumUserDisabled ApplicationServingStatusEnum = "USER_DISABLED"
ApplicationServingStatusEnumSystemDisabled ApplicationServingStatusEnum = "SYSTEM_DISABLED"
)


type Application struct {
    AuthDomain *string `json:"authDomain,omitempty"`
    CodeBucket *string `json:"codeBucket,omitempty"`
    DatabaseType *ApplicationDatabaseTypeEnum `json:"databaseType,omitempty"`
    DefaultBucket *string `json:"defaultBucket,omitempty"`
    DefaultCookieExpiration *string `json:"defaultCookieExpiration,omitempty"`
    DefaultHostname *string `json:"defaultHostname,omitempty"`
    DispatchRules []URLDispatchRule `json:"dispatchRules,omitempty"`
    FeatureSettings *FeatureSettings `json:"featureSettings,omitempty"`
    GcrDomain *string `json:"gcrDomain,omitempty"`
    Iap *IdentityAwareProxy `json:"iap,omitempty"`
    ID *string `json:"id,omitempty"`
    LocationID *string `json:"locationId,omitempty"`
    Name *string `json:"name,omitempty"`
    ServiceAccount *string `json:"serviceAccount,omitempty"`
    ServingStatus *ApplicationServingStatusEnum `json:"servingStatus,omitempty"`
    
}

