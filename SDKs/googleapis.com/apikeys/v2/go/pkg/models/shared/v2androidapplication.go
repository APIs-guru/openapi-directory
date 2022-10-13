package shared

type V2AndroidApplication struct {
	PackageName     *string `json:"packageName"`
	Sha1Fingerprint *string `json:"sha1Fingerprint"`
}
