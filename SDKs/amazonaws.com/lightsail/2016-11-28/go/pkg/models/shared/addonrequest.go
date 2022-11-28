package shared

// AddOnRequest
// <p>Describes a request to enable, modify, or disable an add-on for an Amazon Lightsail resource.</p> <note> <p>An additional cost may be associated with enabling add-ons. For more information, see the <a href="https://aws.amazon.com/lightsail/pricing/">Lightsail pricing page</a>.</p> </note>
type AddOnRequest struct {
	AddOnType                AddOnTypeEnum             `json:"addOnType"`
	AutoSnapshotAddOnRequest *AutoSnapshotAddOnRequest `json:"autoSnapshotAddOnRequest,omitempty"`
}
