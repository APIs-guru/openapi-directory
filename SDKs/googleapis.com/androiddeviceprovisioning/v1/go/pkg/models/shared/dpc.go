package shared

// Dpc
// An EMM's DPC ([device policy controller](http://developer.android.com/work/dpc/build-dpc.html)). Zero-touch enrollment installs a DPC (listed in the `Configuration`) on a device to maintain the customer's mobile policies. All the DPCs listed by the API support zero-touch enrollment and are available in Google Play.
type Dpc struct {
	DpcName     *string `json:"dpcName,omitempty"`
	Name        *string `json:"name,omitempty"`
	PackageName *string `json:"packageName,omitempty"`
}
