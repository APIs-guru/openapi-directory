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
	AutoInstallPolicy                      *AutoInstallPolicy                      `json:"autoInstallPolicy,omitempty"`
	AutoUpdateMode                         *ProductPolicyAutoUpdateModeEnum        `json:"autoUpdateMode,omitempty"`
	EnterpriseAuthenticationAppLinkConfigs []EnterpriseAuthenticationAppLinkConfig `json:"enterpriseAuthenticationAppLinkConfigs,omitempty"`
	ManagedConfiguration                   *ManagedConfiguration                   `json:"managedConfiguration,omitempty"`
	ProductID                              *string                                 `json:"productId,omitempty"`
	TrackIds                               []string                                `json:"trackIds,omitempty"`
	Tracks                                 []ProductPolicyTracksEnum               `json:"tracks,omitempty"`
}
