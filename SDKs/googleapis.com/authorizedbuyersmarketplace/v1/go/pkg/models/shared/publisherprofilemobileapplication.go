package shared

type PublisherProfileMobileApplicationAppStoreEnum string

const (
	PublisherProfileMobileApplicationAppStoreEnumAppStoreTypeUnspecified PublisherProfileMobileApplicationAppStoreEnum = "APP_STORE_TYPE_UNSPECIFIED"
	PublisherProfileMobileApplicationAppStoreEnumAppleItunes             PublisherProfileMobileApplicationAppStoreEnum = "APPLE_ITUNES"
	PublisherProfileMobileApplicationAppStoreEnumGooglePlay              PublisherProfileMobileApplicationAppStoreEnum = "GOOGLE_PLAY"
	PublisherProfileMobileApplicationAppStoreEnumRoku                    PublisherProfileMobileApplicationAppStoreEnum = "ROKU"
	PublisherProfileMobileApplicationAppStoreEnumAmazonFireTv            PublisherProfileMobileApplicationAppStoreEnum = "AMAZON_FIRE_TV"
	PublisherProfileMobileApplicationAppStoreEnumPlaystation             PublisherProfileMobileApplicationAppStoreEnum = "PLAYSTATION"
	PublisherProfileMobileApplicationAppStoreEnumXbox                    PublisherProfileMobileApplicationAppStoreEnum = "XBOX"
	PublisherProfileMobileApplicationAppStoreEnumSamsungTv               PublisherProfileMobileApplicationAppStoreEnum = "SAMSUNG_TV"
	PublisherProfileMobileApplicationAppStoreEnumAmazon                  PublisherProfileMobileApplicationAppStoreEnum = "AMAZON"
	PublisherProfileMobileApplicationAppStoreEnumOppo                    PublisherProfileMobileApplicationAppStoreEnum = "OPPO"
	PublisherProfileMobileApplicationAppStoreEnumSamsung                 PublisherProfileMobileApplicationAppStoreEnum = "SAMSUNG"
	PublisherProfileMobileApplicationAppStoreEnumVivo                    PublisherProfileMobileApplicationAppStoreEnum = "VIVO"
	PublisherProfileMobileApplicationAppStoreEnumXiaomi                  PublisherProfileMobileApplicationAppStoreEnum = "XIAOMI"
)

type PublisherProfileMobileApplication struct {
	AppStore      *PublisherProfileMobileApplicationAppStoreEnum `json:"appStore,omitempty"`
	ExternalAppID *string                                        `json:"externalAppId,omitempty"`
	Name          *string                                        `json:"name,omitempty"`
}
