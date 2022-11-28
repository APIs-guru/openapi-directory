package shared

type EntitlementReasonEnum string

const (
	EntitlementReasonEnumFree         EntitlementReasonEnum = "free"
	EntitlementReasonEnumGroupLicense EntitlementReasonEnum = "groupLicense"
	EntitlementReasonEnumUserPurchase EntitlementReasonEnum = "userPurchase"
)

// Entitlement
// The presence of an Entitlements resource indicates that a user has the right to use a particular app. Entitlements are user specific, not device specific. This allows a user with an entitlement to an app to install the app on all their devices. It's also possible for a user to hold an entitlement to an app without installing the app on any device. The API can be used to create an entitlement. As an option, you can also use the API to trigger the installation of an app on all a user's managed devices at the same time the entitlement is created. If the app is free, creating the entitlement also creates a group license for that app. For paid apps, creating the entitlement consumes one license, and that license remains consumed until the entitlement is removed. If the enterprise hasn't purchased enough licenses, then no entitlement is created and the installation fails. An entitlement is also not created for an app if the app requires permissions that the enterprise hasn't accepted. If an entitlement is deleted, the app may be uninstalled from a user's device. As a best practice, uninstall the app by calling Installs.delete() before deleting the entitlement. Entitlements for apps that a user pays for on an unmanaged profile have "userPurchase" as the entitlement reason. These entitlements cannot be removed via the API.
type Entitlement struct {
	ProductID *string                `json:"productId,omitempty"`
	Reason    *EntitlementReasonEnum `json:"reason,omitempty"`
}
