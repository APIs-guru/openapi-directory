package shared

type ProductPolicyAutoUpdateModeEnum string

const (
	ProductPolicyAutoUpdateModeEnumAutoUpdateModeUnspecified ProductPolicyAutoUpdateModeEnum = "autoUpdateModeUnspecified"
	ProductPolicyAutoUpdateModeEnumAutoUpdateDefault         ProductPolicyAutoUpdateModeEnum = "autoUpdateDefault"
	ProductPolicyAutoUpdateModeEnumAutoUpdatePostponed       ProductPolicyAutoUpdateModeEnum = "autoUpdatePostponed"
	ProductPolicyAutoUpdateModeEnumAutoUpdateHighPriority    ProductPolicyAutoUpdateModeEnum = "autoUpdateHighPriority"
)

type ProductPolicyTracksEnum string

const (
	ProductPolicyTracksEnumAppTrackUnspecified ProductPolicyTracksEnum = "appTrackUnspecified"
	ProductPolicyTracksEnumProduction          ProductPolicyTracksEnum = "production"
	ProductPolicyTracksEnumBeta                ProductPolicyTracksEnum = "beta"
	ProductPolicyTracksEnumAlpha               ProductPolicyTracksEnum = "alpha"
)

type ProductPolicy struct {
	AutoInstallPolicy                      *AutoInstallPolicy                      `json:"autoInstallPolicy"`
	AutoUpdateMode                         *ProductPolicyAutoUpdateModeEnum        `json:"autoUpdateMode"`
	EnterpriseAuthenticationAppLinkConfigs []EnterpriseAuthenticationAppLinkConfig `json:"enterpriseAuthenticationAppLinkConfigs"`
	ManagedConfiguration                   *ManagedConfiguration                   `json:"managedConfiguration"`
	ProductID                              *string                                 `json:"productId"`
	TrackIds                               []string                                `json:"trackIds"`
	Tracks                                 []ProductPolicyTracksEnum               `json:"tracks"`
}
